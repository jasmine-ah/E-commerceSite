const Product = require('../models/Product');
//const { authenticate } = require('../authenticate');
const User = require('../models/Users');
const Order = require('../models/Order');

exports.getOrder = async (req, res) => {
    try {
        const userId = req.userId; 
        if (!userId) return res.status(400).json({ message: 'User ID not found' });

        const orders = await Order.find({ userId }).populate('products.productId');
        if (!orders || orders.length === 0) return res.status(404).json({ message: 'No orders found' });

        const ordersWithTotalAmount = orders.map(order => {
            const totalAmount = order.products.reduce(
                (sum, product) => sum + product.quantity * product.productId.price, 0
            );
            return { ...order.toObject(), totalAmount };
        });

        res.json({ orders: ordersWithTotalAmount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error finding orders' });
    }
};

exports.getAllOrder= async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching orders' });
    }
  };

exports.orderReport = async (req, res) => {
  try {
    const ordersCount = await Order.countDocuments(); 
    res.json({ count: ordersCount });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order count' });
  }
};

exports.productsSold = async (req, res) => {
  try {
    const productsSoldPerDay = await Order.aggregate([
      {
        $unwind: "$products", 
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, 
          totalProductsSold: { $sum: "$products.quantity" }, 
        },
      },
      {
        $sort: { _id: 1 }, 
      },
    ]);

    res.json(productsSoldPerDay);
  } catch (error) {
    console.error("Error fetching products sold per day:", error);
    res.status(500).json({ message: "Error fetching sold products." });
  }
};
