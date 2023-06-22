import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {

    console.log('Signup clicked');
    // Redirect or perform necessary actions after successful signup
    navigate('/chat');
  };

  return (
  <div className="signup">
    <div className='signup-page'>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit">Signup</button>
      </form>
    </div>
  </div>
  );
};

export default SignupPage;