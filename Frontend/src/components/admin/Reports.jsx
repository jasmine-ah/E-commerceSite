import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Reports = () => {
  const [userData, setUserData] = useState([]);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetchActiveUser();
    fetchOrderReport();
    }, []);

    const fetchActiveUser = async () => {
    await fetch('http://localhost:8080/api/auth/activeUsers')
      .then(response => response.json())
      .then(data => {
        const formattedData = [
          {
            day: 'Active Users', 
            count: data.count
          }
        ];
        setUserData(formattedData);
      })
      .catch(error => console.error('Error fetching active users data:', error));
    };
    const fetchOrderReport = async () => {
      await fetch('http://localhost:8080/api/order/orderreport')
        .then(response => response.json())
        .then(data => {
          const formattedData = [
            {
              day: 'Total Orders', 
              count: data.count
            }
          ];
          setOrderData(formattedData);
        })
        .catch(error => console.error('Error fetching ordered data:', error));
      };
      

  return (
    <div className="report-container">
      <div>
        <h2 className="text-2xl font-bold mb-4">Active Users</h2>
        <BarChart width={500} height={300} data={userData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#1976d2" />
        </BarChart>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Total Orders</h2>
        <BarChart width={500} height={300} data={orderData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#1976d2" />
        </BarChart>
      </div>
    </div>
  );
};

export default Reports;
