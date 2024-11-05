const Cart = require('../models/Cart');
const Product = require('../models/Product');
const mongoose = require('mongoose');
const { authenticate } = require('../authenticate');

exports.addToCart = async (req, res) => {
    try {
      const { productId } = req.body;
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const existingCart = await Cart.findOne({ userId: req.user.id });
      if (!existingCart) {
        const newCart = new Cart({
          userId: req.user.id,
          products: [{ productId }]
        });
        await newCart.save();
        existingCart = newCart;
      } else {
        const productInCart = existingCart.products.find(p => p.productId.toString() === productId);
        if (productInCart) {
          productInCart.quantity++;
        } else {
          existingCart.products.push({ productId, quantity: 1 });
        }
      }

      const totalAmount = existingCart.products.reduce((sum, item) => sum + item.quantity * item.productId.price, 0);
  
      await Cart.findByIdAndUpdate(existingCart._id, { totalAmount });
  
      res.status(200).json({ message: 'Product added to cart successfully', totalAmount });
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(400).json({ message: 'Error adding product to cart', error: error.message });
    }
  };
  
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id })
      .populate('products.productId')
      .exec();

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error getting cart', error: error.message });
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

exports.deleteFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

    if (productIndex !== -1) {
      cart.products.splice(productIndex, 1);
    }
    let totalAmount = 0;
    for (const item of cart.products) {
      const product = await Product.findById(item.productId);
      totalAmount += product.price * item.quantity;
    }

    await Cart.findByIdAndUpdate(cart._id, { products: cart.products, totalAmount });

    const updatedCart = await Cart.findById(cart._id)
      .populate('products.productId')
      .exec();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json({ message: 'Error removing product from cart', error: error.message });
  }
};
