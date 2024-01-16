import { useState } from 'react';
import './Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="left">
          <img
            src="https://res.cloudinary.com/maxjhernandez/image/upload/v1704913023/logo_c9gzri.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div ref={navRef} className="right">
          <a className="link">Home</a>
          <a className="link">About us</a>
          <a className="link">Products</a>
          <a className="link">Contact</a>
          <button>
            <FaTimes />
          </button>
        </div>
        <button>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
