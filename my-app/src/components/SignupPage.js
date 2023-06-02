import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './img/photo-1590402494682-cd3fb53b1f70.avif';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    // Add signup logic here

    console.log('Signup clicked');
    // Redirect or perform necessary actions after successful signup
    navigate('/chat');
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
    <div className="signup-page">
  <h1>Signup Page</h1>
  <form onSubmit={handleSignup}>
    <input type="text" placeholder="Username" className="input-field" />
    <input type="email" placeholder="Email" className="input-field" />
    <input type="password" placeholder="Password" className="input-field" />
    <button type="submit">Signup</button>
  </form>
</div>
  );
};

export default SignupPage;