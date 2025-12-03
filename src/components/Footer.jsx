import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <Link to="/" className="logo">
            RMPA
          </Link>
          <p>&copy;{currentYear}. All Right Reserved </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
