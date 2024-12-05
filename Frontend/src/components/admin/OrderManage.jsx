import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import API_URL from "../../apiConfig"; 
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
    const response = await axios.get(`${API_URL}/api/order/admin/all`);
    setOrders(response.data);
    } catch (err) {
    console.error('Error fetching orders:', err);
    setError('Failed to load orders. Please try again later.');
    } finally {
    setLoading(false);
}
};

return (
    <div className="p-8">
    <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold mb-4 text-[#11ab79]">Order Management</h2>
    </div>
    <TableContainer component={Paper} style={{ backgroundColor: '#030712'}} >
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>ID</TableCell>
            <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>Amount</TableCell>
            <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>Date Ordered</TableCell>
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
                
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>

    </div>
);
}

export default OrderManage;
