const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  // imageUrl: { type: String, required: false },
  imageUrl:[{ type: String }],
  category: { type: String, required:true },
  stock: {type: Number, required:true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
