import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Resume() {
  const experiences = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Responsive applications",
    "Mobile First Development",
    "Front-End Development",
    "Back-End Development",
    "Object Oriented Programming",
    "nodeJS",
    "APIs",
    "Routing",
    "Express.js",
    "MySQL-Sequelize",
    "mongoDB-mongoose",
    "React",
  ];

  return (
    <div className="info">
      <h1 className="title">Resume</h1>
      <Row className="align-items-center ">
        <Col md="6" className="pdf-container">
          <object
            data={require("../pdf/AnthonyLinebaughResume2022.pdf")}
            width={"900px"}
            height={"1000px"}
          >
            Your web browser does not support a PDF plugin. Instead you can try
            clicking below to download my resume instead.
            <br></br>
            <a href="https://drive.google.com/file/d/14CHrwzS_XS9ysWjcta1b9dHoajlVi69e/view?usp=sharing">
              <img
                id="resume"
                src={require("../images/paper_image.png")}
                alt="document"
              ></img>
            </a>
          </object>
        </Col>
        <Col md="6" className="resume-container">
          <div className="resume-info">
            <h1>Languages and Experience</h1>

            {experiences.map((experience) => (
              <p key={experience.id} className="exp-nolist">
                {experience}
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
