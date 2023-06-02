import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './img/photo-1580894732444-8ecded7900cd.avif';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Login submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'top left, top right';
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundSize = '';
    };
  }, []);

  return (
    <div className="login-page">
      <div className="content">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="signup-link">Don't have an account? <Link to="/signup">Signup</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;