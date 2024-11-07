import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

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
    const response = await axios.get('http://localhost:8080/api/auth/allUser', {
      
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
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">No users found.</TableCell>
              </TableRow>
            ) : null}
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserManage;
