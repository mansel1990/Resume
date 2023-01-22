import React from "react";

import Icons from "../images/sprite.svg";

const HomeScreen = () => {
  return (
    <>
      <div className="home-content">
        <div className="home-content__header">
          Hello! I'm{" "}
          <span className="home-content__content-styled">Sanjay Mansel</span>,
          <br /> Senior front-end developer
        </div>
        <div className="home-content__content">
          Over 10+ years of proven experience and meaningful contributions to
          teams of varying sizes in core software programming. Capable of
          continous learning while still nurturing junior developers.
          <br /> Front-end technologies such as{" "}
          <span className="home-content__content-styled">React JS</span> and
          EXTJS is my forte with good working experience on Java, Node and
          Express.
          <br />
        </div>

        <div className="home-content__ach">
          <div className="home-content__ach-group">
            <div className="home-content__ach-icon">
              <span className="home-content__ach-icon-content">$1M</span>
            </div>
            <div className="home-content__ach-summary">
              <span className="home-content__ach-summary-line1">Saved $1M</span>
              <span className="home-content__ach-summary-line2">
                improving admin user efficiency
              </span>
            </div>
          </div>

          <div className="home-content__ach-group">
            <div className="home-content__ach-icon">
              <span className="home-content__ach-icon-content">
                <svg className="home-content__ach-nav-icon">
                  <use href={`${Icons}#icon-star`} />
                </svg>
              </span>
            </div>
            <div className="home-content__ach-summary">
              <span className="home-content__ach-summary-line1">
                Multiple Star
              </span>
              <span className="home-content__ach-summary-line1">
                Performance Awards
              </span>
            </div>
          </div>

          <div className="home-content__ach-group">
            <div className="home-content__ach-icon">
              <span className="home-content__ach-icon-content">6</span>
            </div>
            <div className="home-content__ach-summary">
              <span className="home-content__ach-summary-line1">
                React: Number of projects
              </span>
              <span className="home-content__ach-summary-line2">
                using my react framework
              </span>
            </div>
          </div>

          <div className="home-content__ach-group">
            <div className="home-content__ach-icon">
              <span className="home-content__ach-icon-content">15+</span>
            </div>
            <div className="home-content__ach-summary">
              <span className="home-content__ach-summary-line1">
                EXTJS: Number of
              </span>
              <span className="home-content__ach-summary-line2">
                custom components created
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
