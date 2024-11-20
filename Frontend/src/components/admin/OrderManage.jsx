import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function OrderManage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", imageUrl: "", category: "" });
    const [editProduct, setEditProduct] = useState({ _id: "", name: "", description: "", price: "", imageUrl: [""], category: "" });
    
    useEffect(() => {
    fetchOrders();
    }, []);

const fetchOrders = async () => {
    try {
    setLoading(true);
    setError(null);
    const response = await axios.get('http://localhost:8080/api/order/admin/all');
    setOrders(response.data);
    } catch (err) {
    console.error('Error fetching orders:', err);
    setError('Failed to load orders. Please try again later.');
    } finally {
    setLoading(false);
}
};



// const handleOpenAdd = () => setOpenAdd(true);
// const handleCloseAdd = () => setOpenAdd(false);

// const handleOpenEdit = (product) => {
//     setEditProduct(product);
//     setOpenEdit(true);
// };
// const handleCloseEdit = () => setOpenEdit(false);

// const handleInputChange = (e, isEdit = false) => {
//     const { name, value } = e.target;
//     if (isEdit) {
//     setEditProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//     } else {
//     setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//     }
// };

// const handleAddProduct = async () => {
//     try {
//     await axios.post('http://localhost:8080/api/products/create', newProduct);
//     fetchProducts();
//     setNewProduct({ name: "", description: "", price: "", imageUrl: "", category: "" });
//     handleCloseAdd();
//     } catch (err) {
//     console.error('Error adding product:', err);
//     }
// };

// const handleEditProduct = async () => {
//     try {
//     await axios.put(`http://localhost:8080/api/products/${editProduct._id}`, editProduct);
//     fetchProducts();
//     handleCloseEdit();
//     } catch (err) {
//     console.error('Error updating product:', err);
//     }
// };

return (
    <div className="p-8">
    <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold mb-4 text-[#11ab79]">Order Management</h2>
        {/* <button onClick={handleOpenAdd} className='bg-[#3b82f6] rounded text-white hover:bg-slate-600'><Add/> Add New Product</button> */}
    </div>
    <TableContainer component={Paper} style={{ backgroundColor: '#030712'}} >
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>ID</TableCell>
            {/* <TableCell>Image</TableCell> */}
            {/* <TableCell>Email</TableCell> */}
            <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>Amount</TableCell>
            <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>Date Ordered</TableCell>
            {/* <TableCell>Ordered Products</TableCell> */}
            </TableRow>
        </TableHead>
        <TableBody>
            {!loading && orders.length === 0 ? (
            <TableRow>
                <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }} colSpan={5} align="center">No orders found.</TableCell>
            </TableRow>
            ) : null}
            {orders.map((order) => (
            <TableRow key={order._id} style={{transition: 'background-color 0.3s ease',}} className="hover:bg-[#31415c] hover:text-[#e5e7eb]">
                <TableCell style={{color: '#9ca3af' , borderBottomColor:'#9ca3af' }}>{order._id}</TableCell>
                <TableCell style={{color: '#9ca3af' , borderBottomColor:'#9ca3af' }}>{order.totalAmount}</TableCell>
                <TableCell style={{color: '#9ca3af' , borderBottomColor:'#9ca3af' }}>{order.createdAt}</TableCell>
                {/* <TableCell>{order.productId.name}</TableCell> */}
                {/* <TableCell>${product.price.toFixed(2)}</TableCell> */}
                <TableCell>
                {/* <button onClick={() => handleOpenEdit(product)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">
                    <Edit />
                </button>
                <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    <Delete />
                </button> */}
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>

    {/* <Modal open={openAdd} onClose={handleCloseAdd}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
        <h2 className="text-xl mb-4">Add New Product</h2>
        <TextField fullWidth name="name" label="Product Name" value={newProduct.name} onChange={(e) => handleInputChange(e)} margin="normal" />
        <TextField fullWidth name="description" label="Product Description" value={newProduct.description} onChange={(e) => handleInputChange(e)} margin="normal" />
        <TextField fullWidth name="price" label="Price" type="number" value={newProduct.price} onChange={(e) => handleInputChange(e)} margin="normal" />
        <TextField fullWidth name="imageUrl" label="Image URL" value={newProduct.imageUrl} onChange={(e) => handleInputChange(e)} margin="normal" />
        <TextField fullWidth name="category" label="Product Category" value={newProduct.category} onChange={(e) => handleInputChange(e)} margin="normal" />
        <Button onClick={handleAddProduct} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Add Product
        </Button>
        </Box>
    </Modal>

    
    <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
        <h2 className="text-xl mb-4">Edit Product</h2>
        <TextField fullWidth name="name" label="Product Name" value={editProduct.name} onChange={(e) => handleInputChange(e, true)} margin="normal" />
        <TextField fullWidth name="description" label="Product Description" value={editProduct.description} onChange={(e) => handleInputChange(e, true)} margin="normal" />
        <TextField fullWidth name="price" label="Price" type="number" value={editProduct.price} onChange={(e) => handleInputChange(e, true)} margin="normal" />
        <TextField fullWidth name="imageUrl" label="Image URL" value={editProduct.imageUrl} onChange={(e) => handleInputChange(e, true)} margin="normal" />
        <TextField fullWidth name="category" label="Product Category" value={editProduct.category} onChange={(e) => handleInputChange(e, true)} margin="normal" />
        <Button onClick={handleEditProduct} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Update Product
        </Button>
        </Box>
    </Modal> */}
    </div>
);
}

export default OrderManage;
