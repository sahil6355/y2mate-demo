import { Link } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    /*  <footer>
      <div className="sub-footer">
        <p>
          @2024{" "}
          <Link to="/" aria-label="footer link">
            y2meta.lol
          </Link>
        </p>
        <div className="footer-link">
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
      </div>
    </footer> */

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
