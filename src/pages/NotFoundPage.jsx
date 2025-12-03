import React from "react";

const NotFoundPage = () => {
  return (
    <section aria-labelledby="notFound">
      <div className="wrapper-contents notFound">
        <h1 id="notFound" className="h2">
          404 - Page Not Found
        </h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn">
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
