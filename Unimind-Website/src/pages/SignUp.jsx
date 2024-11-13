import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Basic email and phone format check (optional but recommended)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Simulate account creation (to be replaced with backend API logic)
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify({ email, fullName }));

    // Navigate to home page after successful sign-up
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-darkblue-900 pt-28 px-4">
      <div className="max-w-lg mx-auto bg-darkblue-800 p-8 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center  text-blue-400">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-lightgray-300">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border border-darkblue-600 rounded-md bg-darkblue-700 text-lightgray-100 placeholder-lightgray-500 focus:outline-none focus:ring-2 focus:ring-darkblue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lightgray-300">Email</label>
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
            <label htmlFor="phone" className="block text-lightgray-300">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-darkblue-600 rounded-md bg-darkblue-700 text-lightgray-100 placeholder-lightgray-500 focus:outline-none focus:ring-2 focus:ring-darkblue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-lightgray-300">Address (Optional)</label>
            <textarea
              id="address"
              className="w-full px-4 py-2 border border-darkblue-600 rounded-md bg-darkblue-700 text-lightgray-100 placeholder-lightgray-500 focus:outline-none focus:ring-2 focus:ring-darkblue-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lightgray-300">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-darkblue-600 rounded-md bg-darkblue-700 text-lightgray-100 placeholder-lightgray-500 focus:outline-none focus:ring-2 focus:ring-darkblue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-lightgray-300">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-darkblue-600 rounded-md bg-darkblue-700 text-lightgray-100 placeholder-lightgray-500 focus:outline-none focus:ring-2 focus:ring-darkblue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="h-5 w-5"
              required
            />
            <label htmlFor="agree" className="text-lightgray-300">
              I agree to the <a href="/terms" className="text-blue-500">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className={`nline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 text-center w-full`}
            disabled={!agree}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
