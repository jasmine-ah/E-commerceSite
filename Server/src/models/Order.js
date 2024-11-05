const mongoose=require('mongoose');
const orderSchema= new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, required:true},
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
}
,{timestamps:true});

export default mongoose.model('Order', orderSchema);