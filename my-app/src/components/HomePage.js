import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <div className="homepage">
      <header>
        <nav>
          <div className='men'><a><Link to="/categories">Menu</Link></a></div>
          <div className='log'><Link to="/login">Login/Signup</Link></div>
        </nav>
      </header>
      <div className='welcome'></div>
      <footer className="footer-bottom">
        <p>&copy; 2023 Alexandria. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
