import React from "react";
import TechProgressBar from "../components/TechProgressBar";

const Skillset = () => {
  return (
    <div>
      <div className="skills-title">Tech Stack</div>
      <TechProgressBar techName="HTML" percent="85" />
      <TechProgressBar techName="CSS" percent="80" />
      <TechProgressBar techName="Javascript" percent="90" />
      <TechProgressBar techName="React JS" percent="90" />
      <TechProgressBar techName="EXTJS" percent="95" />
      <TechProgressBar techName="Angular" percent="25" />
      <TechProgressBar techName="Node" percent="60" />
      <TechProgressBar techName="Java" percent="45" />
      <TechProgressBar techName="My SQL" percent="70" />
      <div className="skills-title">Tools Used</div>
      <div className="tools-used">
        <div className="tools-used__icon1">
          <img
            src={require("../images/icons/eclipse-icon.jpeg")}
            alt="Eclipse"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon2">
          <img
            src={require("../images/icons/vscode-icon.jpeg")}
            alt="VS Code"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon3">
          <img
            src={require("../images/icons/sublime-icon.jpeg")}
            alt="Sublime"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon4">
          <img
            src={require("../images/icons/sql-icon.png")}
            alt="SQL"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon5">
          <img
            src={require("../images/icons/toad-icon.png")}
            alt="Toad"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon6">
          <img
            src={require("../images/icons/git-icon.png")}
            alt="Git"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon7">
          <img
            src={require("../images/icons/jenkins-icon.png")}
            alt="Jenkins"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon8">
          <img
            src={require("../images/icons/svn-icon.png")}
            alt="SVN"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon9">
          <img
            src={require("../images/icons/sourcetree-icon.jpeg")}
            alt="Source Tree"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon10">
          <img
            src={require("../images/icons/jira-icon.jpeg")}
            alt="JIRA"
            className="tools-used__set-icons"
          />
        </div>
        <div className="tools-used__icon11">
          <img
            src={require("../images/icons/rtc-icon.jpeg")}
            alt="RTC"
            className="tools-used__set-icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Skillset;
