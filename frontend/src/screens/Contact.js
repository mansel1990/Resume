import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">Contact</div>
      <div className="contact__item">
        <div className="contact__item-title">Phone</div>
        <div className="contact__item-content">9986134980</div>
      </div>
      <div className="contact__item">
        <div className="contact__item-title">linkedin</div>
        <div className="contact__item-content">
          <a href="https://www.linkedin.com/in/sanjay-selvan-mansel/">
            https://www.linkedin.com/in/sanjay-selvan-mansel/
          </a>
        </div>
      </div>
      <div className="contact__item">
        <div className="contact__item-title">email</div>
        <div className="contact__item-content">
          <a href="mansel1990@gmail.com">mansel1990@gmail.com</a>
        </div>
      </div>

      <div className="contact__title">Personal Details</div>

      <div className="contact__item">
        <div className="contact__item-title">Name</div>
        <div className="contact__item-content">Sanjay Mansel</div>
      </div>
      <div className="contact__item">
        <div className="contact__item-title">Gender</div>
        <div className="contact__item-content">Male</div>
      </div>
      <div className="contact__item">
        <div className="contact__item-title">Marital Status</div>
        <div className="contact__item-content">Married</div>
      </div>
      <div className="contact__item">
        <div className="contact__item-title">Date of Birth</div>
        <div className="contact__item-content">October 11 1990</div>
      </div>
    </div>
  );
};

export default Contact;
