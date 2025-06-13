import React, { useState, useEffect } from 'react';
import '../Style/LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submit
  const handelSubmit = () => {
    onLogin();  // This may not be needed, you can use the handleLogin function directly
  };

  // Actual login handler
  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with actual authentication logic (e.g., API call)
    if (username === 'admin' && password === 'admin') {
      // If the user is an admin
      onLogin('admin');  // Pass 'admin' role to parent
      navigate('/admin');  // Redirect to admin page
    } else if (username === 'user' && password === 'password') {
      // If the user is a regular user
      onLogin('user');  // Pass 'user' role to parent
      navigate('/');  // Redirect to user home page
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    document.title = "Gani works";  // Set document title on mount
  }, []);

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input 
            type='text' 
            placeholder='Username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <FaLock className='icon' />
        </div>

        <div className="remember-forgot">
          <a href="#">Forgot password?</a>
        </div>

          <button type="submit">Login</button>


        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;