import React from "react";
import { ProgressBar } from "react-bootstrap";

const TechProgressBar = ({ techName, percent }) => {
  return (
    <div className="skill-set">
      <div className="skill-set__group">
        <div className="skill-set__group-name">{techName}</div>
        <div className="skill-set__group-progress">
          <ProgressBar
            className="skill-set__group-progress-bar"
            now={percent}
            label={`${percent}%`}
          />
        </div>
      </div>
    </div>
  );
};

export default TechProgressBar;
