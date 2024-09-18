import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa"; // Using react-icons for better icon management
import Logo from '../Images/logo.jpg';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm"
      aria-label="Main Navigation"
    >
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          {/* You can replace the text with an image logo if preferred */}
          <h1 className="mb-0 text-primary">SweetBakery</h1>
          <img src={Logo} alt="Logo" height="40" />
        </NavLink>

        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/menu"
                className="nav-link"
                activeClassName="active"
              >
                Products
              </NavLink>
            </li>
          </ul>

          {/* Contact Information */}
          <div className="d-flex align-items-center">
            <FaPhoneAlt className="me-2 text-primary" />
            <div className="text-end">
              <small className="text-muted">Call Us</small>
              <p className="mb-0 text-primary">+016 852 5963</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
