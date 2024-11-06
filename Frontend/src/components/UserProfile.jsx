import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/auth/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-8 border border-gray-200 transform transition duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full shadow-lg border-4 border-[#c7899e] object-cover"
            src="cart.png"
            alt={user.name}
          />
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
            onClick={handleEditClick}
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
      </div>
    </div>
  );
};

export default UserProfile;
