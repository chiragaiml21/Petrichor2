import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './customer/components/Header/Header';
import HomePage from './customer/pages/Home/HomePage';
import SignIn from './customer/pages/SignIn/SignIn'; 
import Register from './customer/pages/Register/Register';
import Cart from './customer/pages/Cart/Cart'
import Footer from './customer/components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
