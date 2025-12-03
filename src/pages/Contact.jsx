import React from "react";
import "../styles/contact.css";
import Form from "../components/Form";

const Contact = () => {
  return (
    <section aria-labelledby="contact">
      <div className="wrapper-contents contact">
        <h1 id="contact" className="text-center">
          Contact
        </h1>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
