import React from "react";
import { NavLink } from "react-router-dom";
// import ROUTES from "../../Rountes";
import logo from "../../assets/images/logo.png";
import "./Nav.css";


const Nav = () => {
  const token = localStorage.getItem("authToken");
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logoImg" src={logo} alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="active-link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className="active-link">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <button className="navbar-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Nav;
