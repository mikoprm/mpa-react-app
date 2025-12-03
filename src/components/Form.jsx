import React from "react";

const Form = () => {
  return (
    <>
      <form action="#" className="contact__form">
        <fieldset>
          <legend className="h3">Connect with Me</legend>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type here..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@address.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              id="message"
              cols="10"
              rows="5"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="contact__btn">
            SEND IT
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
