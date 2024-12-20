import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CodingNepal. All Rights Reserved.</p>
      <div className="footer-links">
        <NavLink to="/privacy-policy" className="active-link">
          Privacy Policy
        </NavLink>
        <NavLink to="/terms" className="active-link">
          Terms of Service
        </NavLink>
        <NavLink to="/contact" className="active-link">
          Contact
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
