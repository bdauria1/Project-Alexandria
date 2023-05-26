import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const handleLogin = () => {
    // Add login logic here
    console.log('Login clicked');
    // Redirect to the login page
    // You can use the history object or a routing library for navigation
  };

  return (
    <div className="homepage">
      <header>
        <nav>
          <h1>Alexandria</h1>
          <ul>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <h2>Find the Perfect Mentor</h2>
        <p>Get advice from top notch profesionals in the desired field.</p>
        <Link to="/login">Join Now</Link> {/* Replace the button with a link */}
      </section>
      <section className="featured-services">
        <h2>Featured Services</h2>
        <div className="service-card">
          <img src="service-image.jpg" alt="Service" />
          <h3>Service Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Repeat the service-card component for other featured services */}
      </section>
      <footer>
        <p>&copy; 2023 Alexandria. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
