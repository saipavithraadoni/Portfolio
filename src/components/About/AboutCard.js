import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Pavithra Adoni </span>
            from <span className="purple"> Reading, UK.</span>
            <br />
            I hold a Master’s in <span className="purple">Data Science</span>from Middlesex University, London, and a Bachelor’s in <span className="purple">Information Technology</span>
          </p>
          <p style={{ textAlign: "justify" }}>Apart from coding, some other activities that I love to do!</p>
          <ul >
            <li className="about-activity">
              🌱 Gardening
            </li>
            <li className="about-activity">
              👗 Creating and designing custom clothing
            </li>
            <li className="about-activity">
              💛 Volunteering
            </li>
          </ul>
        </p>
      </Card.Body>
    </Card>    
  );
}

export default AboutCard;
