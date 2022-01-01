import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Tabs({ currentPage, pageChange }) {
  //These are each of the tabs
  //depending on which tab is clicked sends the pageChange function the page that was clicked
  //also activates that tab
  return (
    <Row className="banner align-items-center">
      <Col md="6">
        <h1 className="name display-4">Anthony Linebaugh</h1>
      </Col>
      <Col md="6">
        <ul className="nav nav-pills justify-content-center display-4 tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => pageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => pageChange("Works")}
              className={
                currentPage === "Works" ? "nav-link active" : "nav-link"
              }
            >
              Works
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => pageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => pageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}
