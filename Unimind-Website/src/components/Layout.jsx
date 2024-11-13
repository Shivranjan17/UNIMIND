// Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow relative">
        {/* Background Image with Cover Style */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8294566/pexels-photo-8294566.jpeg')`,
            backgroundSize: 'cover', // Ensure the image covers the area
            backgroundPosition: 'center', // Center the image
          }}
        />

        {/* Content Container */}
        <div className="container mx-auto px-4 py-16 pt-20 relative z-10">
          {children} {/* This will render the child components */}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Unimind. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
