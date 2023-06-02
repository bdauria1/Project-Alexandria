import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/Project_Alexandria_LOGO.PNG';


const HomePage = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="background-overlay"></div>
        <Link to="/">
            <img src={logo} alt="Alexandria Logo" className="logo" />
        </Link>
        <h2>Find the Perfect Mentor</h2>
        <p>Get advice from top-notch professionals in the desired field.</p>
        <Link to="/login" className="join-now-link">Join Now</Link>
      </section>
      <footer className="footer-bottom">
        <p>&copy; 2023 Alexandria. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;