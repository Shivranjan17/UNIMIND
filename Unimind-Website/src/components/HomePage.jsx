import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  const cart = []; // Example cart array; you can replace it with actual cart data

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cart={cart} />
      
      {/* Main content with top padding to offset fixed navbar */}
      <div className="pt-20">
        {/* Hero Section with Animated Background */}
        <section className="flex flex-col items-center justify-center min-h-screen relative">
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoom"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/8294566/pexels-photo-8294566.jpeg')`, // Replace with your background image URL
            }}
          />
          <div className="z-10 text-white text-center">
            <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">Welcome to Unimind</h1>
            <p className="text-lg md:text-xl mt-4 animate-fade-in-delay">
              Your partner in Adaptive AI Development.
            </p>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Unimind. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
