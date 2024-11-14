import React, { useState, useEffect } from "react";
import {Modal, Box, TextField, Button } from "@mui/material";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        const response = await fetch(`http://localhost:8080/api/auth/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

  const handleEditClick = async () => {
    try {
    await axios.put(`http://localhost:8080/api/auth/${editUser._id}`, editUser);
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

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const handleSave = () => {
  //   setIsEditing(false);
  // };

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen ">
  <div className="bg-white shadow-xl w-full pt-10 p-8 rounded-lg border border-gray-200">
    {/* Profile Header */}
    <div className="flex items-center space-x-4 pb-4 border-b border-gray-200 mb-6">
      <img className="w-24 h-24 rounded-full shadow-lg border-4 border-[#c7899e] object-cover" src="cart.png" alt={user.name}/>
      <div className="flex flex-col">
        {/* <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2> */}
        <h2 className="text-xl font-semibold text-gray-500">{user.email}</h2>
        <button className="mt-2 text-sm text-gray-500 underline hover:text-gray-700" onClick={() => handleOpenEdit(user)}> Edit profile</button>
      </div>
    </div>

    {/* Tabs Section */}
    <div className="flex space-x-4 text-gray-500 mb-4 text-sm border-b border-gray-200 pb-2">
      <button className="hover:text-gray-800 font-medium">My details</button>
      <button onClick={() => handleOpenEdit(user)} className="hover:text-gray-800">Edit Profile</button>
      {/* <button className="hover:text-gray-800">Password</button> */}
    </div>

    {/* Content Section */}
    <div>
      <h3 className="text-lg font-medium text-gray-800 mb-4">My Details</h3>
      {/* <p className="text-gray-600 text-sm mb-6">
      {user.name}
      </p> */}
      <div className="space-y-4">
      <p className="text-xl text-gray-800"><i className="fas fa-calendar-alt mr-1 text-[#c7899e]"></i>  Joined {new Date(user.createdAt).toLocaleDateString()}</p>
      <p className="text-xl text-gray-800"><span className="text-[#c7899e]">Name:</span> {user.name}</p>
      <p className="text-xl text-gray-800"><span className="text-[#c7899e]">Email Address:</span> {user.email}</p>
      <p className="text-xl text-gray-800"><span className="text-[#c7899e]">Bio </span><br /><br /> <span className="bg-[#e9e8e8] mt-3 p-6 pb-9 px-8 rounded-md">Enthusiastic learner, tech lover, and coffee connoisseur.</span></p>
        <br />

      </div>

    </div>
  </div>

  {/* Modal */}
  <Modal open={openEdit} onClose={handleCloseEdit}>
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
      <h2 className="text-xl mb-4">Edit Profile</h2>
      <TextField
        fullWidth
        name="name"
        label="Name"
        value={editUser.name}
        onChange={(e) => handleInputChange(e, true)}
        margin="normal"
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        value={editUser.email}
        onChange={(e) => handleInputChange(e, true)}
        margin="normal"
      />
      <Button onClick={handleEditClick} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Update Profile
      </Button>
    </Box>
  </Modal>
</div>
  );
};

export default UserProfile;
