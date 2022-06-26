import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Resume() {
  //list of experiences (can easily add)
  const experiences = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Git",
    "Responsive applications",
    "Mobile First Development",
    "Front-End Development",
    "Back-End Development",
    "Object Oriented Programming",
    "nodeJS",
    "APIs",
    "REST",
    "Express.js",
    "MySQL-Sequelize",
    "bcrypt",
    "JSON Web Tokens",
    "mongoDB-mongoose",
    "GraphQL",
    "React",
    "Babel",
    "WebPack",
    "Debugging",
    "Testing (Jest)",
  ];

  //used to make every odd/even skill contain different css
  function handleExperience(exp, id) {
    if (id % 2) {
      return (
        <Col key={id} className="exp-nolist bkgrd-grey" md="6">
          {exp}
        </Col>
      );
    } else {
      return (
        <Col key={id} className="exp-nolist bkgrd-white" md="6">
          {exp}
        </Col>
      );
    }
  }

  return (
    <div className="info">
      <h1 className="title">Resume</h1>
      <Row className="align-items-center ">
        <Col md="6" className="pdf-container">
          <object
            className="errPDF"
            data={require("../pdf/AnthonyLinebaughResume2022.pdf")}
            width={"900px"}
            height={"1000px"}
          >
            Your web browser does not support a PDF plugin. Instead you can try
            clicking below to download my resume instead.
            <br></br>
            <a href="https://docs.google.com/document/d/1hxIrIzITbFgdOB8_r41lFSwfGZjihGCgsikPUkM2rAg/edit?usp=sharing">
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
            <Row className="exp-container">
              {experiences.map((experience, index) =>
                handleExperience(experience, index)
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
