import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/notFound.css";

const NotFound = () => {
  return (
    <section aria-labelledby="notFound">
      <div className="wrapper-contents notFound">
        <h1 id="notFound" className="h2">
          404 - Page Not Found
        </h1>
        <p>The page you are looking for does not exist.</p>
        <NavLink to="/" className="btn">
          Go to Homepage
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;