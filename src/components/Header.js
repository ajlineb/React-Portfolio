import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

import Tabs from "./Tabs";
import TabsListed from "./TabsListed";
import { Row, Col } from "react-bootstrap";

function Header() {
  const { height, width } = useWindowDimensions();

  return (
    <nav>
      <Row className="banner align-items-center">
        <Col sm="6">
          <h1 className="name">Anthony Linebaugh</h1>
        </Col>
        <Col sm="6" className="tabs-container">
          {width > 900 ? <TabsListed /> : <Tabs />}
        </Col>
      </Row>
    </nav>
  );
}

export default Header;
