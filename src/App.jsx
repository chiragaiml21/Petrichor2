import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './customer/components/Header/Header';
import HomePage from './customer/pages/Home/HomePage';
import SignIn from './customer/pages/SignIn/SignIn'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
