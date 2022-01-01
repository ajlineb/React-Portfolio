import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Works() {
  return (
    <div>
      <Row className="align-items-center">
        <Col md="6" className="image-container">
          <a href="https://jparris3213.github.io/UNC_Project_1_Group/">
            <img
              id="showcase"
              src={require("../images/AstroProject.png")}
              alt="Space website"
            ></img>
            <p className="text-block">Astronomical Guidance</p>
          </a>
        </Col>
        <Col md="6" className="image-container">
          <a href="https://philip-project2.herokuapp.com/">
            <img
              id="showcase"
              src={require("../images/ForumProject.png")}
              alt="Forum webpage"
            ></img>
            <p className="text-block">Riposte Forum</p>
          </a>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md="6" className="image-container">
          <a href="https://github.com/ajlineb/Object-Relational-Mapping-E-Commerce-Backend">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/Object-Relational-Mapping-E-Commerce-Backend/main/images/E_comm.PNG"
              alt="Forum webpage"
            ></img>
            <p className="text-block">E-Commerce Backend</p>
          </a>
        </Col>
        <Col md="6" className="image-container">
          <a href="https://budget-tracker-0-1.herokuapp.com/">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/Proggressive-Budget-Tracker/main/images/BudgetTracker.png"
              alt="Forum webpage"
            ></img>
            <p className="text-block">Budget Tracker Progressive Web App</p>
          </a>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md="6" className="image-container">
          <a href="https://github.com/ajlineb/SQL-Employee-Tracker">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/SQL-Employee-Tracker/main/images/employeeDatabase.png"
              alt="Forum webpage"
            ></img>
            <p className="text-block">SQL Employee Tracker</p>
          </a>
        </Col>
        <Col md="6" className="image-container">
          <a href="https://ajlineb.github.io/Weather_Dashboard/">
            <img
              id="showcase"
              src="https://raw.githubusercontent.com/ajlineb/Weather_Dashboard/main/Assets/Images/Weather_Dashboard.png"
              alt="Forum webpage"
            ></img>
            <p className="text-block">Weather Dashboard APIs</p>
          </a>
        </Col>
      </Row>
    </div>
  );
}
