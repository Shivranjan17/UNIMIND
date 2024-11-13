import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    profilePicture: ''
  });

  useEffect(() => {
    // Fetch user info from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    } else {
      navigate('/signin'); // Redirect to sign-in if not authenticated
    }
  }, [navigate]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser((prevUser) => ({ ...prevUser, profilePicture: reader.result }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(user)); // Save updated user info
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-lg mx-auto bg-gray-900 p-8 rounded-xl shadow-xl">
        <h2 className="text-4xl font-semibold mb-8 text-center tracking-tight  text-blue-400">User Profile</h2>

        <div className="text-center mb-6">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-lg"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="block mx-auto mb-4 text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-700 file:rounded-md file:bg-gray-800 file:text-white hover:file:bg-gray-700 transition"
          />
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-400">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
              value={user.fullName}
              onChange={handleProfileChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
              value={user.email}
              disabled
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-400">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
              value={user.phone}
              onChange={handleProfileChange}
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-400">Address</label>
            <textarea
              id="address"
              name="address"
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
              value={user.address}
              onChange={handleProfileChange}
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
