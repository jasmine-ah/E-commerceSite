import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from './Sidebar';
import ProductManagement from './ProductManage';
import UserManagement from './UserManage';
import Reports from './Reports';
import OrderManagement from './OrderManage';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [isSidebarOpen, setSidebarOpen] = useState(false); 

  return (
    <div className="admin-dashboard bg-slate-200 min-h-screen flex flex-col">
      <AppBar position="fixed" className="bg-gray-800 text-white w-full top-0 z-10">
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
          <button className="md:hidden text-white ml-auto" onClick={() => setSidebarOpen(!isSidebarOpen)}> &#9776;</button>
        </Toolbar>
      </AppBar>

      <div className="flex flex-1 pt-[64px]"> 
        {/* Sidebar */}
        <aside
          className={`w-full md:w-64 fixed top-[64px] bottom-0 bg-gray-100 p-4 z-10 transition-transform ${isSidebarOpen ? 'transform-none' : '-translate-x-full'} md:transform-none`} >
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>

        {/* main content */}
        <section className="flex-1 ml-0 md:ml-64 overflow-y-auto p-4 bg-white">
          {activeTab === 'products' && <ProductManagement />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'orders' && <OrderManagement />}
          {activeTab === 'reports' && <Reports />}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
