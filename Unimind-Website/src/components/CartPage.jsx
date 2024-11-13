// CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty. <Link to="/courses" className="text-blue-600">Browse courses</Link>.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border-b py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold mt-6">Total: ${total.toFixed(2)}</p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
