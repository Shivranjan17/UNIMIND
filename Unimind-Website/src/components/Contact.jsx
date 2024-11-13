import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 content-container">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Get in Touch</h2>
      <p className="text-center text-white mb-8">
        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            className="border-2 border-blue-600 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className="border-2 border-blue-600 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
          <textarea
            id="message"
            className="border-2 border-blue-600 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            rows="5"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
