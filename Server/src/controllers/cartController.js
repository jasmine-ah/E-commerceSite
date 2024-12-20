const Cart = require('../models/Cart');
const Product = require('../models/Product');
//const { authenticate } = require('../authenticate');
const User = require('../models/Users');
const Order = require('../models/Order');

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.userId;

    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = new Cart({ userId, products: [], totalAmount: 0 });
    }

    const existingProduct = cart.products.find(item => item.productId.toString() === productId);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    const totalAmount = await Promise.all(cart.products.map(async (item) => {
      const product = await Product.findById(item.productId);
      return product.price * item.quantity;
    })).then(results => results.reduce((total, result) => total + result, 0));

    cart.totalAmount = totalAmount;

    await cart.save();
    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// exports.removeFromCart = async (req, res) => {
//     try {
//         const { productId } = req.params;
//         if (!req.user) {
//             return res.status(401).json({ message: 'Unauthorized' });
//         }

//         let cart = await Cart.findOne({ userId: req.userId });

//         if (!cart) {
//             return res.status(404).json({ message: 'Cart not found' });
//         }

//         cart.products = cart.products.filter(p => p.productId.toString() !== productId);
//         await cart.save();

//         res.status(200).json({ message: 'Product removed from cart', products: cart.products });
//     } catch (error) {
//         console.error("Error removing product from cart:", error);
//         res.status(400).json({ message: 'Error removing product from cart', error: error.message });
//     }
// };


exports.deleteCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const productId = req.params.productId || req.query.productId;
    const userCart = await Cart.findOne({ userId });
    if (!userCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = userCart.products.findIndex(item => item.productId.equals(productId));

    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    const product = userCart.products[productIndex];
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      userCart.products.splice(productIndex, 1);
    }
    await userCart.save();

    res.json({ message: 'Product quantity updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const userId = req.userId; 
    if (!userId) return res.status(400).json({ message: 'User ID not found' });

    const cart = await Cart.findOne({ userId }).populate('products.productId');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const totalAmount = cart.products.reduce((sum, product) =>
      sum + product.quantity * product.productId.price, 0);

    await Cart.findOneAndUpdate({ userId }, { $set: { totalAmount } });

    res.json({ cart: cart.products, totalAmount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error finding cart' });
  }
};

// Checkout and place order

exports.checkout = async (req, res) => {
  try {
    const { cartItems, totalAmount, selectedItems } = req.body; 
    
    const selectedCartItems = cartItems.filter(item => selectedItems.includes(item._id));
    for (const item of selectedCartItems) {
      const product = await Product.findById(item.productId);

      if (product.stock < item.quantity) {
        return res.status(400).json({ success: false, message: `Not enough stock for product: ${product.name}` });
      }

      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    const newOrder = new Order({
      userId: req.userId,
      products: selectedCartItems.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.productId.price
      })),
      totalAmount,
    });

    await newOrder.save();

    const updatedCart = await Cart.findOneAndUpdate(
      { userId: req.userId },
      { $pull: { products: { _id: { $in: selectedItems } } } }, 
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    res.json({ success: true, orderId: newOrder._id });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ success: false, message: 'An error occurred during checkout' });
  }
};

// exports.checkout = async (req, res) => {
//   const userId = req.userId;
//   const { cartItems } = req.body; 

//   console.log("Received cartItems:", cartItems);

//   try {
//     if (!cartItems || !Array.isArray(cartItems.products) || cartItems.products.length === 0) {
//       return res.status(400).json({ message: "Invalid cart items" });
//     }
//     const orderProducts = cartItems.products.map(item => ({
//       productId: item.productId._id, 
//       quantity: item.quantity,
//       price: item.productId.price,
//     }));

//     const totalAmount = orderProducts.reduce((total, item) => total + item.price * item.quantity, 0);
//     const order = new Order({ userId, products: orderProducts, totalAmount });
//     await order.save();
//     await Cart.findOneAndUpdate(
//       { userId },
//       { $pullAll: { products: orderProducts.map(item => ({ productId: item.productId })) } }
//     );

//     res.status(201).json(order);
//   } catch (error) {
//     console.error("Error during checkout:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

exports.updateQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const product = cart.products.find(p => p.productId.toString() === productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    product.quantity = quantity;
    let totalAmount = 0;
    for (const item of cart.products) {
      const prod = await Product.findById(item.productId);
      totalAmount += prod.price * item.quantity;
    }

    await Cart.findByIdAndUpdate(cart._id, { $set: { products: cart.products, totalAmount } });

    const updatedCart = await Cart.findById(cart._id)
      .populate('products.productId')
      .exec();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json({ message: 'Error updating quantity', error: error.message });
  }
};
