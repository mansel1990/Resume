import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../images/sprite.svg";

const Sidebar = () => {
  const [selectedTopic, setSelectedTopic] = useState("summary");

  const activeClass = "side-nav__item side-nav__item-active";
  const inactiveClass = "side-nav__item";

  const selectPage = (e) => {
    if (e.target.innerHTML.includes("Skill Set")) {
      setSelectedTopic("skills");
    } else if (e.target.innerHTML.includes("Work and Education")) {
      setSelectedTopic("work");
    } else if (e.target.innerHTML.includes("Contact")) {
      setSelectedTopic("contact");
    } else {
      setSelectedTopic("summary");
    }
  };

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li>
          <div className="user-nav">
            <div className="user-nav__user">
              <img
                src={require("../images/SMface.png")}
                alt="SM"
                className="user-nav__user-photo"
              />
              <div>
                <span className="user-nav__user-name">Sanjay Mansel</span>
              </div>
            </div>
          </div>
        </li>
        <li
          className={selectedTopic === "summary" ? activeClass : inactiveClass}
        >
          <Link onClick={selectPage} className="side-nav__link" to="/">
            <svg className="side-nav__icon">
              <use href={`${Icons}#icon-user`} />
            </svg>
            <span className="side-nav__name">Summary</span>
          </Link>
        </li>
        <li
          className={selectedTopic === "skills" ? activeClass : inactiveClass}
        >
          <Link onClick={selectPage} className="side-nav__link" to="/skillset">
            <svg className="side-nav__icon">
              <use xlinkHref={`${Icons}#icon-star`} />
            </svg>
            <span className="side-nav__name">Skill Set</span>
          </Link>
        </li>
        <li className={selectedTopic === "work" ? activeClass : inactiveClass}>
          <Link onClick={selectPage} className="side-nav__link" to="/profile">
            <svg className="side-nav__icon">
              <use href={`${Icons}#icon-book`} />
            </svg>
            <span className="side-nav__name">Work and Education</span>
          </Link>
        </li>
        <li
          className={selectedTopic === "contact" ? activeClass : inactiveClass}
        >
          <Link onClick={selectPage} className="side-nav__link" to="/contact">
            <svg className="side-nav__icon">
              <use xlinkHref={`${Icons}#icon-phone`} />
            </svg>
            <span className="side-nav__name">Contact</span>
          </Link>
        </li>
      </ul>
      <div className="legal-text">&copy;2023 Sanjay Mansel</div>
    </div>
  );
};

export default Sidebar;
