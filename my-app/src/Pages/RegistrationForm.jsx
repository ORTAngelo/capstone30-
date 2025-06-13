// import React from 'react'
// import '../Style/LoginForm.css'
// import { FaUser, FaLock  } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { Link, useNavigate} from 'react-router-dom';
// import { useEffect } from 'react';

// const RegistrationForm = () => {
//   useEffect(()=>{
//     document.title = "Register Page"
//   })

//   const navigate = useNavigate();

//   return (
//     <div className='wrapper'>
//       <form action="">
//         <h1>Register</h1>
//         <div className="input-box">
//           <input type='text' placeholder='Username' required/>
//           <FaUser className='icon'/>
//         </div>
//         <div className="input-box">
//           <input type='email' placeholder='Email' required/>
//           <MdEmail className='icon'/>
//         </div>
//         <div className="input-box">
//           <input type='password' placeholder='Password' required/>
//           <FaLock className='icon'/>
//         </div>
//         <div className="input-box">
//           <input type='password' placeholder='Confirm your password' required/>
//           <FaLock className='icon'/>
//         </div>

//         <button type='submit'>Create Account</button>

//         <div className="register-link">
//           <p>Already have an account? <Link to="/">Login</Link></p>
//         </div>
//       </form>
//       </div>
//   )
// }

// export default RegistrationForm

/////////////

import React, { useState, useEffect } from 'react';
import '../Style/LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // Use this for redirecting

  useEffect(() => {
    document.title = "Register Page";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Create user (you would typically call an API to create the account)
    // This is a dummy example where you would send data to your backend API.
    const userData = {
      username,
      email,
      password,
    };

    try {
      // Call your API to create the user here.
      // For the sake of this example, we'll assume it's successful.
      console.log('User created:', userData);

      // Redirect to login page after successful registration
      navigate('/'); // Use navigate to redirect to the login page
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Create Account</button>

        <div className="register-link">
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
