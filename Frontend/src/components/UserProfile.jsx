import React, { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Abebe Kebede",
    email: "abe@gmail.com",
    joined: "October 20, 2024",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 h-[100%] mt-8">
      <div className="flex items-center space-x-2">
        <img
          className="w-24 h-24 rounded-full object-cover shadow-lg"
          src="cart.png"
          alt={user.name}
        />
        <div>
          {isEditing ? (
            <div>
              <input
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500 mt-2">Joined: {user.joined}</p>
            </>
          )}
        </div>
      </div>
      <div className="mt-8">
        <button
          className="bg-[#c7899e] text-white text-sm px-6 py-2 rounded-md shadow hover:bg-[#eacc79] transition duration-300"
          onClick={handleEditClick}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
        {isEditing && (
          <button
            className="bg-green-600 text-white text-sm px-6 py-2 rounded-md shadow hover:bg-green-500 transition duration-300 ml-4"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
