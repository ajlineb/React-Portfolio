import React from "react";

import Tabs from "./Tabs";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Row className="banner align-items-center">
        <Col sm="6">
          <h1 className="name">Anthony Linebaugh</h1>
        </Col>
        <Col sm="6" className="tabs-container">
          <Tabs />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
