import React from "react";
import { Row } from "react-bootstrap";
import WorkItem from "../components/workItem";
import { Helmet } from "react-helmet";

export default function Works() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Anthony Linebaugh - Works</title>
        <link rel="" href="https://ajlineb.github.io/React-Portfolio/works" />
      </Helmet>
      <div className="info">
        <h1 className="title">Works</h1>
        <Row className="align-items-center image-rows">
          <WorkItem />
        </Row>
      </div>
    </>
  );
}
