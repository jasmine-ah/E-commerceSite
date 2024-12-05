import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
//import { BarChart } from '@mui/x-charts/BarChart';
import API_URL from "../../apiConfig"; 
const Reports = () => {
  const [userData, setUserData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productsSoldData, setProductsSoldData] = useState([]);
  useEffect(() => {
    fetchActiveUser();
    fetchOrderReport();
    fetchProductReport();
    fetchProductsSoldData();
    }, []);

    const fetchActiveUser = async () => {
    await fetch(`${API_URL}/api/auth/activeUsers`)
      .then(response => response.json())
      .then(data => {
        const formattedData = [
          {
            name: 'Active Users',
            count: data.count,
          }
        ];
        setUserData(formattedData);
      })
      .catch(error => console.error('Error fetching active users data:', error));
    };
    const fetchOrderReport = async () => {
      await fetch(`${API_URL}/api/order/orderreport`)
        .then(response => response.json())
        .then(data => {
          const formattedData = [
            {
              name: 'Total Orders',
              count: data.count,
            }
          ];
          setOrderData(formattedData);
        })
        .catch(error => console.error('Error fetching ordered data:', error));
      };
  
  const fetchProductReport = async ()=>{
    await fetch(`${API_URL}/api/report/countproduct`)
    .then(response => response.json())
    .then(data => {
      const formattedData = [
        {
          name: 'Total Products',
          count: data.count,
        }
      ];
      setProductData(formattedData);
    })
    .catch(error =>console.error('Error fetching products:', error));
  };
  const fetchProductsSoldData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/report/productsold`);
      const data = await response.json();
      const formattedData = data.map((item) => ({
        date: item._id,
        totalSold: item.totalProductsSold, 
      }));
      setProductsSoldData(formattedData);
    } catch (error) {
      console.error('Error fetching products sold data:', error);
    }
  };
  return (
    <div className="report-container grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Active Users */}
    <div className="bg-[#1f2937] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#6366f1]">Active Users</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={userData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
          <YAxis tick={{ fill: '#9ca3af' }} />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#9ca3af' }} />
          <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Total Orders */}
    <div className="bg-[#1f2937] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-[#10b981] mb-4">Total Orders</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={orderData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
          <YAxis tick={{ fill: '#9ca3af' }} />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#9ca3af' }} />
          <Line type="monotone" dataKey="count" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Total Products */}
    <div className="bg-[#1f2937] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-[#db8f10] mb-4">Total Products</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={productData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
          <YAxis tick={{ fill: '#9ca3af' }} />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#9ca3af' }} />
          <Line type="monotone" dataKey="count" stroke="#f59e0b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-[#1f2937] p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-semibold mb-6">Products Sold Per Day</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={productsSoldData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="date"
            tick={{ fill: '#9ca3af' }}
            label={{ value: 'Date', position: 'insideBottom', fill: '#9ca3af' }}
          />
          <YAxis
            tick={{ fill: '#9ca3af' }}
            label={{ value: 'Total Sold', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
          />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#9ca3af' }} />
          <Line
            type="monotone"
            dataKey="totalSold"
            stroke="#34d399"
            strokeWidth={2}
            dot={{ fill: '#34d399', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  );
};

export default Reports;
