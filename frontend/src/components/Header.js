import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="mob-user-nav">
        <div className="mob-user-nav__user">
          <img
            src={require("../images/SMface.png")}
            alt="SM"
            className="mob-user-nav__user-photo"
          />
          <div>
            <span className="mob-user-nav__user-name">Sanjay Mansel</span>
            <span className="mob-user-nav__user-role">Front End Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
