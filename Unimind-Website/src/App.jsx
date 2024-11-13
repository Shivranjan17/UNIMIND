import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Contact from './components/Contact';
import AiSystems from './pages/AiSystems';
import AutonomousSolutions from './pages/AutonomousSolutions';
import PersonalizedAI from './pages/PersonalizedAI';
import Courses from './components/Courses';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import CheckoutPage from './components/CheckoutPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './components/Profile';
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-systems" element={<AiSystems />} />
        <Route path="/services/autonomous-solutions" element={<AutonomousSolutions />} />
        <Route path="/services/personalized-ai" element={<PersonalizedAI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
