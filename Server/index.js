const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const cartRoutes = require('./src/routes/cartRoutes'); 
const reportRoutes = require('./src/routes/reportRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const checkAndCreateAdminUser = require('./src/init')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const allowedOrigins = [
  'https://e-commerce-site-perfume.vercel.app', 'http://localhost:8080','http://localhost:5173' 
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));
app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/report', reportRoutes);

checkAndCreateAdminUser().then(()=>{
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});

