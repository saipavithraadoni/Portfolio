import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import contactImg from "../../Assets/contact.png";

function Contact() {
  return (
    <Container>
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={6} className="home-header">
            <h1 className="heading">
              Reach Out to Me
            </h1>
            <div>
              <Card className="no-card">
                <Card.Body style={{ color: "rgb(155 126 172)" }}>
                <h5>
                    📧 Email:{" "}
                    <span>
                        <a
                        href="mailto:adoni.saipavithra@gmail.com"
                        style={{ color: "white", textDecoration: "underline" }}
                        >
                        adoni.saipavithra@gmail.com
                        </a>
                    </span>
                    </h5>

                    <h5>
                    📞 Phone:{" "}
                    <span>
                        <a
                        href="tel:+4407765830123"
                        style={{ color: "white", textDecoration: "underline" }}
                        >
                        (+44) 7765830123
                        </a>
                    </span>
                    </h5>

                    <h5>
                    📍 Address:{" "}
                    <span>
                        <a
                        href="https://www.google.com/maps/place/Reading,+UK"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white", textDecoration: "underline" }}
                        >
                        Reading, UK
                        </a>
                    </span>
                    </h5>

                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} style={{ paddingBottom: 20 }} className="text-center">
            <img
              src={contactImg}
              alt="contact"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
