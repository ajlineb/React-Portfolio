import React from "react";

import Tabs from "./Tabs";
import { Row, Col } from "react-bootstrap";

{
  /* <Row className="banner align-items-center"></Row> */
}

function Header() {
  return (
    <div>
      <Row className="banner align-items-center">
        <Col>
          <h1 className="name">Anthony Linebaugh</h1>
        </Col>
        <Col>
          <Tabs />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
