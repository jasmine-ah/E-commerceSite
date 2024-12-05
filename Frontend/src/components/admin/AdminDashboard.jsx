import React, { useState } from 'react';
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
          <button className="fixed top-4 right-4 z-50 text-white p-2 rounded-md shadow-md transition duration-300 md:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}> &#9776;</button>
      
      <div className="flex flex-1 text-[#9ca3af]"> 
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
