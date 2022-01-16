import React from "react";
import { Row } from "react-bootstrap";
import WorkItem from "../components/workItem";

export default function Works() {
  return (
    <div className="info">
      <h1 className="title">Works</h1>
      <Row className="align-items-center image-rows">
        <WorkItem />
      </Row>
    </div>
  );
}
