import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

const TechProgressBar = ({ techName, percent }) => {
  const [status, setStatus] = useState(0);
  useEffect(() => {
    if (status < percent) {
      setStatus(status + 5);
    }
  }, [status, percent]);

  return (
    <div className="skill-set">
      <div className="skill-set__group">
        <div className="skill-set__group-name">{techName}</div>
        <div className="skill-set__group-progress">
          <ProgressBar
            className="skill-set__group-progress-bar"
            now={status}
            label={`${percent}%`}
          />
        </div>
      </div>
    </div>
  );
};

export default TechProgressBar;
