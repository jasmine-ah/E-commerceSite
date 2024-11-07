import React, { useState, useEffect } from "react";
import {Modal, Box, TextField, Button } from "@mui/material";
import axios from "axios";

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
   

  // const handleEditClick = () => {
  //   setIsEditing(!isEditing);
  // };
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
    <div className="bg-gray-50 flex ">
      <div className="bg-white rounded-2xl shadow-2xl w-full h-full p-2 border border-gray-200 transform transition duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center">
          <img className="w-32 h-32 rounded-full shadow-lg border-4 border-[#c7899e] object-cover" src="cart.png" alt={user.name}/>
          {isEditing ? (
            <input
              className="mt-4 text-2xl font-medium text-gray-800 border-b-2 border-gray-300 focus:border-[#c7899e] outline-none text-center"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          ) : (
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">{user.name}</h2>
          )}
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-400 text-sm mt-1">Joined: {user.createdAt}</p>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="text-center text-gray-600 text-sm leading-relaxed">
            Bio: Enthusiastic learner, tech lover, and coffee connoisseur.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-[#c7899e] text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-[#eacc79] transform transition-all duration-300"
            onClick={() => handleOpenEdit(user)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
          {isEditing && (
            <button
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-green-500 transform transition-all duration-300"
              onClick={handleSave}
            >
              Save
            </button>
          )}
        </div>
        <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
        <h2 className="text-xl mb-4">Edit Profile</h2>
        <TextField fullWidth name="name" label="Name" value={editUser.name} onChange={(e) => handleInputChange(e, true)} margin="normal" />
        <TextField fullWidth name="email" label="Email" value={editUser.email} onChange={(e) => handleInputChange(e, true)} margin="normal" />
        <Button onClick={handleEditClick} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Update Profile
        </Button>
        </Box>
    </Modal>
      </div>
    </div>
  );
};

export default UserProfile;
