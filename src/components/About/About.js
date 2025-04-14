import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import MoreStack from "./MoreStack";
import Experience from "./Experience";



function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={4}
            style={{ paddingTop: "20px", paddingBottom: "5px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          Professional <strong className="purple">Experience</strong>
        </h1>
        <Experience />

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset
          </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <br/>
        <h1 className="project-heading">
          <strong className="purple">Other Skills</strong> 
        </h1>
        <MoreStack/>
        <p style={{ color: "rgb(155 126 172)" }}>
            "Stay curious. Keep building. That’s how great things happen and humanity progresses."
          </p>
          <footer className="blockquote-footer">Sai Pavithra Adoni</footer>
          
      </Container>
    </Container>
  );
}

export default About;
