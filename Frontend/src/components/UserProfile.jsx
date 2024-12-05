import React, { useState, useEffect } from "react";
import {Modal, Box, TextField, Button } from "@mui/material";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import API_URL from "../apiConfig"; 
const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: ""});
  const [editUser, setEditUser] = useState({ _id: "", name: "", email: ""});

  useEffect(() => {
    fetchUser();
    }, [userId]);
  
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_URL}/api/auth/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

  const handleEditClick = async () => {
    try {
    await axios.put(`${API_URL}/api/auth/${editUser._id}`, editUser);
    fetchUser();
    handleCloseEdit();
    } catch (err) {
    console.error('Error updating user:', err);
    }
};

const handleOpenEdit = (user) => {
  setEditUser(user);
  setOpenEdit(true);
};
const handleCloseEdit = () => setOpenEdit(false);

const handleInputChange = (e, isEdit = false) => {
  const { name, value } = e.target;
  if (isEdit) {
  setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
  } else {
  setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  }
};

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="flex justify-center mt-10 min-h-screen px-4 sm:px-4 lg:px-8">
      <div className="bg-white shadow-2xl w-full max-w-[800px] h-auto sm:h-[600px] p-6 sm:p-8 rounded-xl border border-gray-300 transform hover:scale-105 transition-all duration-300 ease-in-out">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 pb-6 border-b border-gray-300 mb-6">
          <img className="w-24 h-24 rounded-full shadow-lg border-4 border-[#c7899e] object-cover" src="/avatar.jpg" alt={user.name}/>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <i className="fas fa-calendar-alt text-[#c7899e] mr-2"></i>
            Joined: {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-700">
            <i className="fas fa-user text-[#c7899e] mr-2"></i>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-lg text-gray-700">
            <i className="fas fa-envelope text-[#c7899e] mr-2"></i>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg text-gray-700">
            <i className="fas fa-quote-left text-[#c7899e] mr-2"></i>
            <span className="font-semibold">Bio:</span>
            <span className="block mt-2 p-4 bg-gray-100 rounded-lg shadow-sm">
              Enthusiastic learner, tech lover, and coffee connoisseur.
            </span>
          </p>
        </div>

        <div className="mt-6 text-right">
          <button onClick={() => handleOpenEdit(user)} className="bg-[#c7899e] hover:bg-[#c56f8c] text-white py-2 px-6 rounded-lg shadow-md focus:outline-none">Edit Profile</button>
        </div>
      </div>

      {/* Modal */}
      <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", p: 4, boxShadow: 24, borderRadius: 2,}}>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Edit Profile</h2>
          <TextField fullWidth name="name" label="Name" value={editUser.name} onChange={(e) => handleInputChange(e, true)} margin="normal"/>
          <TextField fullWidth name="email" label="Email" value={editUser.email} onChange={(e) => handleInputChange(e, true)} margin="normal"/>
          <Button onClick={handleEditClick} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}> Update Profile</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default UserProfile;
