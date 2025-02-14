import React from "react";

const tools = [
  { name: "Eclipse", src: require("../images/icons/eclipse-icon.jpeg") },
  { name: "VS Code", src: require("../images/icons/vscode-icon.jpeg") },
  { name: "Sublime", src: require("../images/icons/sublime-icon.jpeg") },
  { name: "SQL", src: require("../images/icons/sql-icon.png") },
  { name: "Toad", src: require("../images/icons/toad-icon.png") },
  { name: "Git", src: require("../images/icons/git-icon.png") },
  { name: "Jenkins", src: require("../images/icons/jenkins-icon.png") },
  { name: "SVN", src: require("../images/icons/svn-icon.png") },
  { name: "Source Tree", src: require("../images/icons/sourcetree-icon.jpeg") },
  { name: "JIRA", src: require("../images/icons/jira-icon.jpeg") },
  { name: "RTC", src: require("../images/icons/rtc-icon.jpeg") },
];

export default function ToolsUsed() {
  return (
    <section className="tools-section">
      <h2 className="tools-title">Tools Used</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.src} alt={tool.name} className="tool-icon" />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
