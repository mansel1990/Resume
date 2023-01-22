import React from "react";
import TechProgressBar from "../components/TechProgressBar";

const Skillset = () => {
  // const makeNewPosition = () => {
  //   // Get viewport dimensions (remove the dimension of the div)
  //   var h = window.innerHeight - 50;
  //   var w = window.innerWidth - 50;

  //   var nh = Math.floor(Math.random() * h);
  //   var nw = Math.floor(Math.random() * w);

  //   console.log(nh, nw);
  //   return [nh, nw];
  // };

  // const animateDiv = () => {
  //   const myclass = "tools-used__set-icons";
  //   var newq = makeNewPosition();
  //   console.log(newq);
  //   // myclass.animate({ top: newq[0], left: newq[1] }, 1000, function () {
  //   //   animateDiv(myclass);
  //   // });
  // };

  // useEffect(() => {
  //   // animateDiv();
  // });

  return (
    <div>
      <div className="skills-title">Tech Stack</div>
      <TechProgressBar techName="HTML" percent="85" />
      <TechProgressBar techName="CSS" percent="80" />
      <TechProgressBar techName="Javascript" percent="90" />
      <TechProgressBar techName="React JS" percent="90" />
      <TechProgressBar techName="EXTJS" percent="90" />
      <TechProgressBar techName="Angular" percent="25" />
      <TechProgressBar techName="Node" percent="60" />
      <TechProgressBar techName="Java" percent="45" />
      <TechProgressBar techName="My SQL" percent="70" />
      <div className="skills-title">Tools Used</div>
      <div className="tools-used">
        <div className="tools-used__set">
          <div className="tools-used__set-s1">
            <div className="tools-used__set-icon-set1">
              <img
                src={require("../images/icons/eclipse-icon.jpeg")}
                alt="Eclipse"
                className="tools-used__set-icons"
              />
              <img
                src={require("../images/icons/vscode-icon.jpeg")}
                alt="VS Code"
                className="tools-used__set-icons"
              />
            </div>
            <div className="tools-used__set-icon-set2">
              <img
                src={require("../images/icons/sublime-icon.jpeg")}
                alt="Sublime"
                className="tools-used__set-icons"
              />
              <img
                src={require("../images/icons/sql-icon.png")}
                alt="SQL"
                className="tools-used__set-icons"
              />
            </div>
            <div className="tools-used__set-icon-set3">
              <img
                src={require("../images/icons/toad-icon.png")}
                alt="Toad"
                className="tools-used__set-icons"
              />
            </div>
          </div>
          <div className="tools-used__set-s2">
            <div className="tools-used__set-icon-set1">
              <img
                src={require("../images/icons/git-icon.png")}
                alt="Git"
                className="tools-used__set-icons"
              />
              <img
                src={require("../images/icons/jenkins-icon.png")}
                alt="Jenkins"
                className="tools-used__set-icons"
              />
            </div>
            <div className="tools-used__set-icon-set2">
              <img
                src={require("../images/icons/svn-icon.png")}
                alt="SVN"
                className="tools-used__set-icons"
              />
              <img
                src={require("../images/icons/sourcetree-icon.jpeg")}
                alt="Source Tree"
                className="tools-used__set-icons"
              />
            </div>
          </div>
          <div className="tools-used__set-s3">
            <div className="tools-used__set-icon-set4">
              <img
                src={require("../images/icons/jira-icon.jpeg")}
                alt="JIRA"
                className="tools-used__set-icons"
              />
              <img
                src={require("../images/icons/rtc-icon.jpeg")}
                alt="RTC"
                className="tools-used__set-icons"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
