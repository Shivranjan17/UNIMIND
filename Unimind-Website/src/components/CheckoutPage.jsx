import React from "react";
import { useLocation, Link } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const { cart, totalAmount } = location.state || { cart: [], totalAmount: 0 };

  console.log("Checkout Location State:", location.state);  // Log the state to see if cart is passed correctly.

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Checkout</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Billing Information</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="firstName" className="text-gray-600">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="lastName" className="text-gray-600">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                className="p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email address"
                required
              />
            </div>
          </form>
        </div>

        {/* Cart Items */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <span className="text-gray-800 font-medium">{item.title}</span>
                      <span className="text-gray-500">${item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className=" text-gray-800 mt-6 flex justify-between items-center font-semibold text-xl">
                <span>Total:</span>
                <span className="text-gray-800">${totalAmount}</span>
              </div>
            </>
          )}
        </div>

        {/* Checkout Button */}
        <div className="mt-6 flex justify-end">
          <Link to="/">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Complete Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
