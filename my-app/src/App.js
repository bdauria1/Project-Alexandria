import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import HubPage from './components/HubPage';
import ChatPage from './components/ChatPage';
import ChatResponse from './components/ChatResponse';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hub" element={<HubPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chatresponse" element={<ChatResponse />} />
      </Routes>
    </Router>
  );
}

export default App;
