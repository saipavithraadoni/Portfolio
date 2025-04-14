import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Certifications() {
  const certs = [
    {
      title: "TypeScript Control Structures",
      issuer: "Coursera Project Network",
      certLink: "https://coursera.org/share/906dacbc01f8565b0bb2feff118f5473",
    },
    {
      title: "HTML5 Application Development Fundamentals",
      issuer: "Coursera University of Michigan",
      certLink: "https://coursera.org/share/f253c683fc27ed3ef59094c65dbc6b9e",
    },
    {
      title: "AWS",
      issuer: "APSSDC",
      certLink: "https://drive.google.com/file/d/1c5csecy-O6_OWO7eVn0UMzZyUnAdAVxi/view?usp=sharing",
    },
    {
      title: "AWS Cloudfront: Serve content from multiple S3 buckets",
      issuer: "Coursera Project Network",
      certLink: "https://coursera.org/verify/WHYVFNTMX3QC",
    },
    {
      title: "AWS S3 Basics",
      issuer: "Coursera Project Network",
      certLink: "https://coursera.org/share/d208f4625bddd7e0b5156fe7e5cb8584",
    },
    {
      title: "Python",
      issuer: "HackerRank",
      certLink: "https://drive.google.com/file/d/18h4NoO3YDCUHsC7XI_B1mvEjznZMKCGI/view?usp=sharing",
    },
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "Python Institute®",
      certLink: "https://drive.google.com/file/d/1KTZ88zdiWk4LqoFLuRXEi1y7CqE2wElv/view?usp=sharing",
    },
    {
      title: "Create Your First Web App with Python and Flask",
      issuer: "Coursera Project Network",
      certLink: "https://coursera.org/verify/4A0WSRRTQC1O",
    },
    {
      title: "SDLC - Tools, Techniques and Processes",
      issuer: "Sree Vidyanikethan Engineering College",
      certLink: "https://drive.google.com/file/d/1IBunSw1BwsUIe25Azifoi2z-sn5tMSqg/view?usp=sharing",
    },
    {
      title: "Overview of Data Visualization",
      issuer: "Coursera Project Network",
      certLink: "https://coursera.org/share/b3f7ebbaabffc520a79cf9a3c99deeae",
    },
    {
      title: "Machine Learning Pipelines with Azure ML Studio",
      issuer: "Coursera",
      certLink: "https://coursera.org/share/44fe48467ea0a67f6693a6c053b9a26d",
    },
    {
      title: "Visualizing Filters of a CNN using TensorFlow",
      issuer: "Coursera",
      certLink: "https://coursera.org/share/aa44390941461bd9212aef5d758e4a5b",
    },
    {
      title: "Google Sheets",
      issuer: "Coursera",
      certLink: "https://coursera.org/share/c994bd6e60921023b0d83ce71cd60531",
    },
    {
      title: "Introduction to Microsoft Excel",
      issuer: "Coursera",
      certLink: "https://www.coursera.org/account/accomplishments/verify/P4G2V92JDBRC",
    },
    {
      title: "Microsoft Forms",
      issuer: "Coursera",
      certLink: "https://www.coursera.org/account/accomplishments/verify/4AW9JGYHVDU2",
    },
    {
      title: "WordPress",
      issuer: "Coursera",
      certLink: "https://www.coursera.org/account/accomplishments/verify/ZRLX8VTRGTZW",
    },

    {
      title: "Networking Essentials",
      issuer: "Cisco",
      certLink: "https://drive.google.com/file/d/18bArJKJjHqZPNTLXKMDQTj8zfhZzz-G0/view?usp=sharing",
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco",
      certLink: "https://drive.google.com/file/d/13qoWTIim1gKqO7XT0sJFJ-aqGW-CtgyR/view?usp=share_link",
    },
    {
      title: "Architecting Smart IoT Devices",
      issuer: "EIT Digital",
      certLink: "https://drive.google.com/file/d/1GUitZjySHAzTDiBhVQIEH73t2o8L9ybd/view?usp=sharing",
    },
    
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color: "white" }}>
          <strong className="purple">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {certs.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="project-card-view" style={{  paddingBottom: "60px" }}>
                <Card.Body>
                  <Card.Title style={{ color: "rgb(155 126 172)" }}>{cert.title}</Card.Title>
                  <Card.Text style={{ color: "#aaa" }}>
                    <strong>Issuer:</strong> {cert.issuer}
                  </Card.Text>
                  {cert.certLink && (
                    <a
                      href={cert.certLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm"
                    >
                      View Certificate
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
