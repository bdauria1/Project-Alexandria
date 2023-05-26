import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import HubPage from './components/HubPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Add this route */}
        <Route path="/hub" element={<HubPage />} />
      </Routes>
    </Router>
  );
}

export default App;
