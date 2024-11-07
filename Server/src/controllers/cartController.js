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
    // const cart = await Cart.findById(req.params.id);
    const userId = req.userId;

  const userCart = await Cart.findOne({userId})
    const deletedCartItem = await userCart.products.id(req.params).remove();
    if (!deletedCartItem) {
      console.error(`Product with ID ${req.params.id} not found.`);
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error.message);
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

// exports.deleteFromCart = async (req, res) => {
//   try {
//     const { cartId, productId } = req.params;
    
//     const updatedCart = await removeFromCart(cartId, productId);
    
//     if (!updatedCart) {
//       return res.status(404).json({ message: 'Product removed successfully' });
//     }
    
//     res.json(updatedCart);
//   } catch (error) {
//     console.error('Error removing product from cart:', error);
//     res.status(500).json({ message: 'Failed to remove product from cart' });
//   }
// };


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
  const userId  = req.userId;
  const { cartItems } = req.body;

  try {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ message: "Invalid cart items" });
    }

    const order = new Order({
      userId: userId,
      products: cartItems.map(item => ({
        productId: item.productId,
        quantity: item.quantity
      })),
      totalAmount: cartItems.reduce((total, item) => 
        total + item.productId.price * item.quantity,
        0
      )
    });

    await order.save();
    const updatedCart = await Cart.findOneAndUpdate(
      { userId: userId },
      { $pullAll: { products: cartItems.map(item => ({ productId: item.productId })) } }
    );

    res.status(201).json(order);
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


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
