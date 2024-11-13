import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication (this will be replaced with backend logic)
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/"); // Redirect to home page after successful sign-in
  };

  return (
    <div className="min-h-screen bg-darkblue-900 pt-28 px-4"> {/* Dark background with padding */}
      <div className="max-w-md mx-auto bg-darkblue-800 p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center  text-blue-400">Sign In</h2> {/* Light text color */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lightgray-300">Email</label> {/* Light text */}
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-darkblue-600 rounded-md bg-darkblue-700 text-lightgray-100 placeholder-lightgray-500 focus:outline-none focus:ring-2 focus:ring-darkblue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lightgray-300">Password</label> {/* Light text */}
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-darkblue-600 rounded-md bg-darkblue-700 text-lightgray-100 placeholder-lightgray-500 focus:outline-none focus:ring-2 focus:ring-darkblue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="nline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 text-center w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
