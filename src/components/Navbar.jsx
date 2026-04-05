import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-link">
        <img className="logo-img" src={logo} alt="Logo" />
        <h2>AnarMitra </h2>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;