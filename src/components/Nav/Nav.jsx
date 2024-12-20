import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Rountes";
import "./Nav.css";

const Nav = () => {
  const token = localStorage.getItem("authToken");
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
      {!token ? (
        <>
          <NavLink to="/login" ClassName="active-link"  className="login-button">
            Log In
          </NavLink>
        </>
      ) : (
        <>
            <NavLink to="/logout" ClassName="active-link" className="links">
              LogOut
            </NavLink>
        </>
      )}
      <button className="navbar-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Nav;
