import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleDescription = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const projects = [
    {
      title: "ANABEL 2.0: An Advanced Activity Monitoring System for Dementia in AAL with Enhanced User Interface and Activity Monitoring Features",
      description:
        "A Dementia monitoring website leveraging HTML, CSS, Node.js, JavaScript, and PHP for the frontend to enable continuous activity tracking, behaviour detection, and routine reminders for individuals with dementia and caregivers. Implemented MySQL for the backend to ensure efficient data management and storage",
      ghLink: "https://github.com/saipavithraadoni/ANABEL",
    },
    {
      title: "IoT Enabled Prediction of Diabetic-Cardio Disease through Fog Computing",
      description:
        "An IoT-enabled system for predicting diabetic-cardio disease through fog computing, utilizing supervised and unsupervised machine learning algorithms, with a user interface built using HTML5, CSS, and MYSQL.",
      ghLink:
        "https://github.com/saipavithraadoni/Prediction-of-Diabetic-Cardio-Disease-through-Fog-Computing",
    },
    {
      title: "Tesla Stock Prediction",
      description:
        "Stock prediction using historical Tesla data and time-series analysis in Python.",
      ghLink: "https://github.com/saipavithraadoni/tesla-stock-prediction",
    },
    
    {
      title: "Water Quality Visualization",
      description:
        "Visual analysis to gain insights on trends, patterns, and relationship between water quality parameters and site type, season, sampling location in different water bodies and over time",
      ghLink: "https://github.com/saipavithraadoni/water_quality_visualization",
    },
    {
      title: "Screentime Analysis",
      description:
        "Data Analysis on Data collected from friends and family to Investigate the relationship between screen time and their health status.",
      ghLink: "https://github.com/saipavithraadoni/Screentime",
    },
    {
      title: "Face Edge Detection",
      description:
        "Edge detection using MATLAB with HSV color space and SVM for improved face detection.",
      ghLink: "https://github.com/saipavithraadoni/FaceEdgeDetection",
    },
    {
      title: "Altair Visualizations",
      description:
        "Data visualizations built using Altair library for interactive exploration.",
      ghLink: "https://github.com/saipavithraadoni/Altair",
    },
    {
      title: "Movie Review & Rating App ",
      description:
        "C++ based application for reviewing and rating movies with CLI.",
      ghLink: "https://github.com/saipavithraadoni/C",
    },
    {
      title: "Comparative study of recommendation algorithms on yelp dataset:",
      description:
        "A comparative analysis of machine learning models, for predicting restaurant ratings using the Yelp dataset.",
      ghLink: "#",
    },
    {
      title: "Seminar on using Virtual Reality Mirror Therapy for Post Stroke Patients,",
      description:
        " ",
      ghLink: "#",
    },
    {
      title: "Traffic Sign Detection using YOLO5, PyTorch",
      description:
        "Implemented a traffic sign detection system using the YOLOv5 object detection algorithm with PyTorch.",
      ghLink: "#",
    },

  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A showcase of real-world projects from GitHub.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((proj, index) => {
            const isExpanded = expandedProjects[index];
            const isLong = proj.description.length > 100;
            const shortDesc = proj.description.slice(0, 100);

            return (
              <Col md={4} className="project-card" key={index}>
                <Card className="project-card-view" style={{ height: "100%" }}>
                  <Card.Body style={{ position: "relative", paddingBottom: "60px" }}>
                    <Card.Title style={{ color: "rgb(155 126 172)" }}>
                      {proj.title}
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      {isExpanded || !isLong ? proj.description : `${shortDesc}...`}
                      {isLong && (
                        <span
                          onClick={() => toggleDescription(index)}
                          style={{
                            color: "#9b7eac",
                            cursor: "pointer",
                            display: "block",
                            marginTop: "5px",
                          }}
                        >
                          {isExpanded ? "Show less" : "Show more"}
                        </span>
                      )}
                    </Card.Text>
                    {proj.ghLink && (
                      <Button
                      variant="primary"
                      href={proj.ghLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: "16px",
                        padding: "10px 20px", 
                        whiteSpace: "nowrap"  
                      }}
                    >
                      Learn more about this project
                    </Button>
                    
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
