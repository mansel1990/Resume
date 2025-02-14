import React from "react";
import resume from "../assets/Sanjay Mansel Resume - Lead Frontend Developer.pdf";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Sanjay_Mansel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-button-container">
      <button className="resume-button" onClick={handleDownload}>
        📄 Download Resume
      </button>
    </div>
  );
};

export default DownloadResumeButton;
