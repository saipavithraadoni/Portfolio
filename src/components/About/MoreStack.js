import React from "react";
import "../../style.css"; 

function MoreStack() {
  const tools = [
    "React Native",
    "Spring Boot",
    "R",
    "Data Ethics & Security",
    "JavaScript",
    "Teamwork",
    "Scikit-learn",
    "TensorFlow",
    "Altair",
    "Matplotlib",
    "Seaborn",
    "Google Charts",
    "Hadoop",
    "Spark",
    "Hive",
    "MongoDB",
    "OpenStack",
    "Responsive design",
    "Communication",
    "Leadership",
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        <div className="marquee-inner">
          {tools.map((tool, index) => (
            <div className="marquee-box" key={index}>
              {tool}
            </div>
          ))}
          {tools.map((tool, index) => (
            <div className="marquee-box" key={`clone-${index}`}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default MoreStack;
