import React from 'react';
import logo from '../assets/logo.png';
import './CSS/Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <div>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;