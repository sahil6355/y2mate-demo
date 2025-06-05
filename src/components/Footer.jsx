import { Link } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <p className="text-center">@2025 y2meta</p>
        <ul>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/terms-condition">Terms and Condition </Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;