import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/home" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeClassName="active-link">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/login"
        activeClassName="active-link"
        className="login-button"
      >
        Log In
      </NavLink>
      <button className="navbar-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Nav;
