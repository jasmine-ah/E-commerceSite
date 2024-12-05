import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import API_URL from "../../apiConfig"; 
function UserManage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
    setLoading(true);
    setError(null);
    const response = await axios.get(`${API_URL}/api/auth/allUser`, {
      
      headers: {
        
        "Authorization": `Bearer ${localStorage.getItem("token")}`, 
        "Content-Type": "application/json" 
      },
      
    });
    setUsers(response.data);
    } catch (err) {
    console.error('Error fetching users:', err);
    setError('Failed to load users. Please try again later.');
    } finally {
    setLoading(false);
}
};

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-[#6366f1]">User Management</h2>
      <TableContainer component={Paper} style={{ backgroundColor: '#030712'}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>ID</TableCell>
              <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>Name</TableCell>
              <TableCell style={{color: '#fff' , borderBottomColor:'#9ca3af' }}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">No users found.</TableCell>
              </TableRow>
            ) : null}
            {users.map((user) => (
              <TableRow key={user._id} style={{transition: 'background-color 0.3s ease',}} className="hover:bg-[#31415c] hover:text-[#e5e7eb]">
                <TableCell style={{color: '#9ca3af' , borderBottomColor:'#9ca3af' }}>{user._id}</TableCell>
                <TableCell style={{color: '#9ca3af' , borderBottomColor:'#9ca3af' }}>{user.name}</TableCell>
                <TableCell style={{color: '#9ca3af' , borderBottomColor:'#9ca3af' }}>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserManage;
