const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET|| 'default-jwt-secret';

// Signup Controller
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error occurred during signup' });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      SECRET_KEY,
      { expiresIn: '1h', algorithm: 'HS256' }
    );

    res.status(200).json({ token, userId: user._id, message: 'Logged in successfully' });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error occurred during login' });
  }
};

/// Get all user
exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  };
};

// Get user by ID
exports.getUser= async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error finding user' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user' });
  }
};

// active users
exports.activeUsers = async (req, res) => {
  try {
    const activeUsers = await User.aggregate([
      {
        $match: {
          lastActive: { $gte: new Date(new Date().setDate(new Date().getDate() - 7)) }
        }
      },
      {
        $group: {
          _id: { $dayOfWeek: "$lastActive" },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          day: "$_id",
          count: 1,
          _id: 0
        }
      }
    ]);

    res.status(200).json(activeUsers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch active users report', error });
  }
};


exports.activeUsers = async (req,res)=>{
  try {
    const userId = await User.find(_id); 
    const users = await User.countDocuments(userId);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching uesr' });
  }
}