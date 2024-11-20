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
    <div className="admin-dashboard bg-[#030712] text-[#9ca3af] min-h-screen flex flex-col">
      {/* <AppBar position="fixed" className="bg-[#030712] text-white w-full top-0 ">
        <Toolbar style={{ backgroundColor: '#030712', color: '#fff' }}> */}
         
          <button className="md:hidden text-white ml-auto" onClick={() => setSidebarOpen(!isSidebarOpen)}> &#9776;</button>
        {/* </Toolbar> */}
      {/* </AppBar> */}
      
      <div className="flex flex-1 text-[#9ca3af]"> 
        {/* Sidebar */}
        {/* <h2 className='text-white border-[1px] border-[#9ca3af] p-3 w-[10%]'>Retail Analytics</h2> */}
        <aside className={`w-full md:w-60 fixed top-[64px] bottom-0 text-[#9ca3af] bg-[#030712] p-4 z-10 transition-transform ${isSidebarOpen ? 'transform-none' : '-translate-x-full'} md:transform-none`} >
       
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>

        {/* main content */}
        <section className="flex-1 ml-0 md:ml-64 overflow-y-auto p-4 bg-[#030712] text-[#9ca3af]" >
            
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
