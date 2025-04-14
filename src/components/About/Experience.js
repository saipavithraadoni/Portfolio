import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Silence Speaks",
      period: "Oct 2024 - Present",
      bullets: [
        "Designed, developed, and deployed a web app from scratch using React, Spring Boot (Java), PostgreSQL, and Node.js for a UKRI-funded accessibility project.",
        "Enabled playback of AI-generated BSL videos for deaf users in transport and hospitality.",
        "Handled end-to-end front-end and back-end development, API integration, error handling, and UI/UX design.",
        "Applied advanced skills in debugging, state management, and responsive, user-centric UI development.",
        "Mentored and supported 3 newly hired deaf developers during onboarding and integration.",
      ],
    },
    {
      role: "Data Science Intern",
      company: "Silence Speaks",
      period: "Aug 2024 – Oct 2024",
      bullets: [
        "Designed UI/UX and user flows in Figma for a web app tailored to deaf users, focusing on accessibility.",
        "Planned Azure architecture using Blob Storage, SQL Database, and Azure AD, and defined APIs for integration.",
        "Researched Azure services to align features with accessibility, performance, and cost-efficiency goals.",
      ],
    },
  ];

  return (
    <Container fluid className="ex-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          {experiences.map((exp, idx) => (
            <Col md={12} className="mb-4" key={idx}>
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title style={{ color: "rgb(155 126 172)" }}>
                    {exp.role} | <strong>{exp.company}</strong>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{exp.period}</Card.Subtitle>
                  <ul style={{ color: "white", paddingLeft: "20px", marginTop: "10px" }}>
                    {exp.bullets.map((point, i) => (
                      <li key={i} style={{ marginBottom: "10px" }}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
