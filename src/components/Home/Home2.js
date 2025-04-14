import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <h1 style={{ fontSize: "2.6em", color: "white" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid " alt="avatar" />
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I’m a Full Stack Developer passionate about building and experimenting. Whether it's 
              <b className="purple">designing and developing</b> 
              responsive
              <b className="purple"> web pages, apps</b>, or
              <b className="purple"> analyzing and visualizing data </b>
              , I enjoy diving into new technologies and making them work.
              <br />
              <br />
              I also love exploring fun features like camera filters, or <b className="purple">debugging and testing</b> existing apps to make them better.
              I thrive in <b className="purple">dynamic environments, quickly adapt</b> to new tools, and love exploring technologies that enhance functionality.
              <br />
              <br />
              Turning ideas into clean, functional, user-friendly solutions? That’s my kind of <b className="purple">fun</b> !
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <br/><br/><br/><br/>
            <h1>CONNECT WITH ME ON</h1>
            <p>
              I'd love to <span className="purple">collaborate</span> or hear from you.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saipavithraadoni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sai-pavithra-adoni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/saipavithra_adoni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
