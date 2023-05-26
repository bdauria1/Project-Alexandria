import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    
    // Add signup logic here
    
    console.log('Signup clicked');
    // Redirect or perform necessary actions after successful signup
    navigate('/hub');
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        {/* Add your signup form fields here */}
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
