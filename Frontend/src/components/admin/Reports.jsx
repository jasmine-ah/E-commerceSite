import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Reports = () => {

const [userData, setUserData] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/api/auth/activeUsers')
      .then(response => response.json())
      .then(data => setUserData(data));

    // fetch('/api/reports/orders')
    //   .then(response => response.json())
    //   .then(data => setOrderData(data));
  }, []);


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
  
    </div>
  );
};

export default Reports;