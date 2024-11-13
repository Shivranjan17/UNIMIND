import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 content-container">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Our Services</h2>
      <p className="text-center text-gray-300 mb-12">
        We offer a wide range of services to meet the needs of our clients. Our adaptive AI solutions are designed to provide cutting-edge, real-time performance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Service 1 */}
        <div className="service-card shadow-lg p-8 rounded-lg bg-gray-800">
          <img
            src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg"
            alt="AI Systems"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-2xl font-bold text-blue-400 mb-4">AI Systems</h3>
          <p className="text-gray-300 mb-6">
            We create adaptive AI systems that learn and optimize in real-time to ensure peak performance in dynamic environments.
          </p>
          <Link
            to="/services/ai-systems"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 text-center w-full"
          >
            Learn More
          </Link>
        </div>

        {/* Service 2 */}
        <div className="service-card shadow-lg p-8 rounded-lg bg-gray-800">
          <img
            src="https://images.pexels.com/photos/1072851/pexels-photo-1072851.jpeg"
            alt="Autonomous Solutions"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Autonomous Solutions</h3>
          <p className="text-gray-300 mb-6">
            We provide cutting-edge autonomous solutions for self-driving vehicles and intelligent robotics that adapt to changing conditions.
          </p>
          <Link
            to="/services/autonomous-solutions"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 text-center w-full"
          >
            Learn More
          </Link>
        </div>

        {/* Service 3 */}
        <div className="service-card shadow-lg p-8 rounded-lg bg-gray-800">
          <img
            src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg"
            alt="Personalized AI"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Personalized AI</h3>
          <p className="text-gray-300 mb-6">
            Our AI systems are personalized to adapt to individual preferences, enhancing user experiences in real-time.
          </p>
          <Link
            to="/services/personalized-ai"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 text-center w-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
