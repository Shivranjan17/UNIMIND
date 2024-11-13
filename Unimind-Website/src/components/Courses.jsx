import React, { useState } from 'react';

const coursesData = [
  {
    id: 1,
    title: 'AI for Beginners',
    description: 'Introduction to AI concepts and basic algorithms.',
    price: 99.99
  },
  {
    id: 2,
    title: 'Advanced Machine Learning',
    description: 'In-depth course on machine learning algorithms and applications.',
    price: 199.99
  },
  {
    id: 3,
    title: 'Autonomous Systems',
    description: 'Learn how to build autonomous systems like self-driving cars.',
    price: 299.99
  }
];

const Courses = ({ addToCart }) => {
  return (
    <div className="container mx-auto my-8 content-container">
      <h2 className="text-3xl font-bold mb-6  text-blue-400">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <div key={course.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-700 my-2">{course.description}</p>
            <p className="text-lg font-bold text-blue-600">${course.price}</p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => addToCart(course)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
