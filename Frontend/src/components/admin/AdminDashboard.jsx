import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from './Sidebar';
import ProductManagement from './ProductManage';
import UserManagement from './UserManage';

const AdminDashboard = () => {
const [activeTab, setActiveTab] = useState('products');

return (
    <div className="admin-dashboard bg-slate-200">
    <AppBar position="static" className="bg-gray-800 text-white">
        <Toolbar>
        <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
    </AppBar>
    <main className="flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-gray-100 p-4">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>
        <section className="flex-grow p-8">
        {activeTab === 'products' && <ProductManagement />}
        {activeTab === 'users' && <UserManagement />}
        </section>
    </main>
    </div>
);
};

export default AdminDashboard;
