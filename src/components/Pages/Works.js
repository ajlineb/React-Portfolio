import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Works() {
  return (
    <div className="info">
      <h1 className="title">Works</h1>
      <Row className="align-items-center image-rows">
        <Col sm="6" className="image-container">
          <a href="https://jparris3213.github.io/UNC_Project_1_Group/">
            <img
              id="showcase"
              src={require("../images/AstroProject.png")}
              alt="Space website"
            ></img>
          </a>
          <p className="text-block">
            Astronomical Guidance<br></br>
            <a href="https://github.com/jparris3213/UNC_Project_1_Group">
              <img
                id="gitLink"
                src={require("../images/GitHub-Mark-Light-64px.png")}
                alt="github"
              />
            </a>
          </p>
        </Col>
        <Col sm="6" className="image-container">
          <a href="https://philip-project2.herokuapp.com/">
            <img
              id="showcase"
              src={require("../images/ForumProject.png")}
              alt="Forum webpage"
            ></img>
          </a>
          <p className="text-block">
            Riposte Forum<br></br>
            <a href="https://github.com/Terrence-Me/project2-team-one">
              <img
                id="gitLink"
                src={require("../images/GitHub-Mark-Light-64px.png")}
                alt="github"
              />
            </a>
          </p>
        </Col>
      </Row>
      <Row className="align-items-center image-rows">
        <Col sm="6" className="image-container">
          <a href="https://github.com/ajlineb/Object-Relational-Mapping-E-Commerce-Backend">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/Object-Relational-Mapping-E-Commerce-Backend/main/images/E_comm.PNG"
              alt="Forum webpage"
            ></img>
          </a>
          <p className="text-block">
            E-Commerce Backend<br></br>
            <a href="https://github.com/ajlineb/Object-Relational-Mapping-E-Commerce-Backend">
              <img
                id="gitLink"
                src={require("../images/GitHub-Mark-Light-64px.png")}
                alt="github"
              />
            </a>
          </p>
        </Col>
        <Col sm="6" className="image-container">
          <a href="https://budget-tracker-0-1.herokuapp.com/">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/Proggressive-Budget-Tracker/main/images/BudgetTracker.png"
              alt="Forum webpage"
            ></img>
          </a>
          <p className="text-block">
            Budget Tracker Progressive Web App<br></br>
            <a href="https://github.com/ajlineb/Proggressive-Budget-Tracker">
              <img
                id="gitLink"
                src={require("../images/GitHub-Mark-Light-64px.png")}
                alt="github"
              />
            </a>
          </p>
        </Col>
      </Row>
      <Row className="align-items-center image-rows">
        <Col sm="6" className="image-container">
          <a href="https://github.com/ajlineb/SQL-Employee-Tracker">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/SQL-Employee-Tracker/main/images/employeeDatabase.png"
              alt="Forum webpage"
            ></img>
          </a>
          <p className="text-block">
            SQL Employee Tracker
            <br></br>
            <a href="https://github.com/ajlineb/SQL-Employee-Tracker">
              <img
                id="gitLink"
                src={require("../images/GitHub-Mark-Light-64px.png")}
                alt="github"
              />
            </a>
          </p>
        </Col>
        <Col sm="6" className="image-container">
          <a href="https://ajlineb.github.io/Weather_Dashboard/">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/Weather_Dashboard/main/Assets/Images/Weather_Dashboard.png"
              alt="Forum webpage"
            ></img>
          </a>
          <p className="text-block">
            Weather Dashboard APIs<br></br>
            <a href="https://github.com/ajlineb/Weather_Dashboard">
              <img
                id="gitLink"
                src={require("../images/GitHub-Mark-Light-64px.png")}
                alt="github"
              />
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
}
