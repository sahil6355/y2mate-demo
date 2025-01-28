import { Link } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
