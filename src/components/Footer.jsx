import { Link } from "gatsby-plugin-react-i18next";
import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <p className="text-center">@2025 y2meta</p>
        <ul>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="#">Terms of Service</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
