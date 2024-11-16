// src/routes/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import App from '../App';
import Register from '../components/Register';
import Scan from '../components/Scan';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/home" element = {<App/>} />
        <Route path="/scan" element = {<Scan/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter; 
