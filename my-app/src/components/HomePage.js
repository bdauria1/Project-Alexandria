import React from 'react';
import { Link } from 'react-router-dom';
import tutorial from './img/image123.png';

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
      <div className='pagebody'>
        <div className='welcome'>

        </div>
        <div className='tutorial'>
          <h1>How it Works</h1>
            <p>
              You ask the questions, we give you the solutions. 
              With a wide suite of experts in their respective fields, there’s always 
              someone available to help you.  find out more 
            </p>
          <img src={tutorial} className="tutorialimage"/>
        </div>
        <div className='about'>
          <h1>About Us</h1>
          <h2></h2>
        </div>
        <div className='questions'>
          <h1>Have any questions?</h1>
          <div className='trapezoid'>
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <p>&copy; 2023 Alexandria. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
