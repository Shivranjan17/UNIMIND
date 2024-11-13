import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";

const Navbar = ({ cart, setCart, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); // Use this to navigate programmatically
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if user is authenticated

  // Toggle the cart dropdown visibility
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Close the cart when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.cart-dropdown') && !e.target.closest('.cart-icon')) {
      setIsCartOpen(false);
    }
  };

  // Add event listener for clicks outside of cart
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Remove item from cart
  const removeItem = (id) => {
    removeFromCart(id);
  };

  // Handle checkout
  const checkout = () => {
    const totalAmount = cart.reduce((total, item) => total + item.price, 0); // Calculate total amount
    setCart([]); // Clear cart after checkout
    setIsCartOpen(false); // Close the cart dropdown
    navigate("/checkout", { state: { cart, totalAmount } }); // Pass cart data and totalAmount as state
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="unimindcognition_logo.ico" // Replace with your logo path
            alt="Unimind Logo"
            className="h-10"
          />
          <ul className="flex space-x-8 ml-8">
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-800 hover:text-blue-600 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-gray-800 hover:text-blue-600 transition-colors">
                Courses
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center relative space-x-6">
          <a
            href="https://www.linkedin.com/company/unimindcognition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>

          {/* SignIn/SignUp or Logout based on authentication status */}
          {isAuthenticated ? (
            <div className="flex space-x-6">
              <Link
                to="/profile" // Profile link visible when authenticated
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-4 border rounded-md border-gray-300 hover:bg-blue-600 hover:text-white"
              >
                Profile
              </Link>
              <button
  onClick={handleLogout}
  className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-6 rounded-md hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400 transition-colors"
>
  Logout
</button>

            </div>
          ) : (
            <div className="flex space-x-6">
              <Link
                to="/signin"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-4 border rounded-md border-gray-300 hover:bg-blue-600 hover:text-white"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium py-2 px-4 border rounded-md border-gray-300 hover:bg-blue-600 hover:text-white"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Cart Icon */}
          <div
            className="relative cursor-pointer cart-icon"
            onClick={toggleCartDropdown}
          >
            <ShoppingCartIcon className="h-8 w-8 text-gray-800 p-1 rounded-full border border-gray-300 hover:bg-gray-100" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs font-bold">
                {cart.length}
              </span>
            )}
          </div>

          {isCartOpen && (
            <div className="cart-dropdown absolute top-12 right-0 mt-2 w-80 bg-white shadow-md rounded-lg p-4 overflow-y-auto z-30">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">Cart Items: {cart.length}</h2>
              {cart.length > 0 ? (
                <>
                  <ul className="list-none max-h-40 overflow-y-auto space-y-2">
                    {cart.map((item) => (
                      <li key={item.id} className="py-2 border-b border-gray-200 flex justify-between items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                        <button
  onClick={() => removeItem(item.id)} // Remove item by ID
  className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-8 rounded-full transition-colors hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400"
>
  Remove
</button>

                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    onClick={checkout} // Checkout button click handler
                  >
                    Checkout
                  </button>
                </>
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
