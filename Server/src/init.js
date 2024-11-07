const mongoose = require('mongoose');
const User = require('./models/Users'); 

async function checkAndCreateAdminUser() {
  try {
    const count = await User.countDocuments({ role: 'admin' });
    
    if (count === 0) {
      console.log('No admin user found. Creating one...');
      
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: 'admin123',
        role: 'admin'
      });
      
      await adminUser.save();
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error checking or creating admin user:', error);
  }
}

module.exports = checkAndCreateAdminUser;