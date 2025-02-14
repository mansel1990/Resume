import React from "react";
import TechProgressBar from "../components/TechProgressBar";
import ToolsUsed from "../components/ToolsUsed";

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
      <ToolsUsed />
    </div>
  );
};

export default Skillset;
