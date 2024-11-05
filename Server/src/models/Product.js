const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: false },
  category: { type: String, required:true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);