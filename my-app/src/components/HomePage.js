import React from 'react';
import { Link } from 'react-router-dom';
import tutorial from './img/image123.png';
import image1 from './img/imageomg.png';

const HomePage = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <div className="homepage">
      <header>
        <nav>
          <a><Link to="/categories">Menu</Link></a>
          <a><Link to="/login">Login/Signup</Link></a>
        </nav>
      </header>
      <div className='pagebody'>
        <div className='welcome'>
        <img src={image1} className="welcomeimage"/>
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
          <div className='aboutinfo'>
            <div className='whitepaper'>
              <h2>Whitepaper</h2>
              <p>
                Our mission is to create a market economy for knowledge and 
                information monetization. Everyone should be able to
                make an income by selling their expertise.
              </p>
            </div>
            <div className='deck'>
              <h2>Deck</h2>
              <p>
                Our mission is to create a market economy for knowledge and information monetization. 
                Everyone should be able to make an income by selling their expertise.
              </p>
            </div>
            <div className='ourstaff'>
              <h2>Our Staff</h2>
              <p>
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam eu turpis molestie, dictum est a, mattis tellus. 
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam eu turpis molestie, dictum est a, mattis tellus. 
              </p>
            </div>
          </div>
        </div>
        <div className='questions'>
          <h1>Have any questions?</h1>
          <div className='trapezoid'>
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <footer>
        <div className='listings'>
          <div className='collection'>
            <h3>collection</h3>
            <ul>
              <li><a>Home</a></li>
              <li><a>Categories</a></li>
              <li><a>How it Works</a></li>
            </ul>
          </div>
          <div className='relizations'>
            <h3>relizations</h3>
            <ul>
              <li><a>Home</a></li>
              <li><a>Categories</a></li>
              <li><a>How it Works</a></li>
            </ul>
          </div>
          <div className='contacts'>
            <h3>contacts</h3>
            <ul>
              <li><a>Home</a></li>
              <li><a>Categories</a></li>
              <li><a>How it Works</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
