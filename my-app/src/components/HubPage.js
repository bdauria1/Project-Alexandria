import React from 'react';
import { Link } from 'react-router-dom';

const HubPage = () => {
  return (
    <div className="hub-page">
      <h1>Hub Page</h1>
      <p>Welcome to the Hub Page!</p>
      <ul>
        <li></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default HubPage;