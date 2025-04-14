import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  FaHtml5,
  FaAws,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiFigma,
  SiSpringboot,
  SiMicrosoftazure,
  SiPostgresql,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { icon: <DiReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <SiMysql />, name: "MySQL" }, 
        { icon: <SiPostgresql />, name: "PostgreSQL" }, 
        { icon: <FaJava />, name: "Java" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiMicrosoftazure />, name: "Azure" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiFigma />, name: "Figma" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <DiGit />, name: "Git" },
        { icon: <DiPython />, name: "Python" },
        { icon: <CgCPlusPlus />, name: "C++" },

      ].map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          <div>{tech.icon}</div>
          <p style={{ color: "rgb(155 126 172)", marginTop: "8px", fontSize: "14px" }}>
            {tech.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
