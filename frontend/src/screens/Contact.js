import React from "react";
import Icons from "../images/sprite.svg";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact">
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
          <div className="contact__item-content">October 11, 1990</div>
        </div>
        <div className="contact__item">
          <div className="contact__item-title">Languages Known</div>
          <div className="contact__item-content">English, Tamil, Kannada</div>
        </div>
      </div>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/sanjay-selvan-mansel/">
          <div data-hover="hello" className="contact-icons__content">
            <svg className="contact-icons__content-icon">
              <use href={`${Icons}#icon-linkedin`} />
            </svg>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=9986134980">
          <div className="contact-icons__content">
            <svg className="contact-icons__content-icon">
              <use href={`${Icons}#icon-whatsapp`} />
            </svg>
          </div>
        </a>
        <a href="mailto:mansel1990@gmail.com">
          <div className="contact-icons__content">
            <svg className="contact-icons__content-icon">
              <use href={`${Icons}#icon-mail`} />
            </svg>
          </div>
        </a>
        <a href="https://github.com/mansel1990">
          <div className="contact-icons__content">
            <svg className="contact-icons__content-icon">
              <use href={`${Icons}#icon-git`} />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
