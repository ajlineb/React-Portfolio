import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <div className="info">
      <h1 className="title">Resume</h1>
      <Row className="align-items-center">
        <Col md="12" className="pdf-container">
          <embed
            src={require("../pdf/Resume_7.0.pdf")}
            width={"1000px"}
            height={"900px"}
          ></embed>
        </Col>
      </Row>
    </div>
  );
}
