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
          <embed
            src={require("../pdf/AnthonyLinebaughResume2022.pdf")}
            width={"1000px"}
            height={"1000px"}
          ></embed>
          <h1>
            If the PDF is not showing, here is a link to my Resume!
            <br></br>
            <a href="https://drive.google.com/file/d/1lhjm6W-jP2gI-osWlOw8NYRl_nVAVJYN/view?usp=sharing">
              <img
                id="resume"
                src={require("../images/paper_image.png")}
                alt="document"
              ></img>
            </a>
          </h1>
        </Col>
        <Col md="6" className="resume-container">
          <div className="resume-info">
            <h1>Languages and Experience</h1>
            <ul>
              {experiences.map((experience) => (
                <li key={experience.id}>{experience}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
