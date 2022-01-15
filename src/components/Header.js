import React, { useState } from "react";
import Home from "../Pages/Home";
import Works from "../Pages/Works";
import Contact from "../Pages/Contact";
import Resume from "../Pages/Resume";
import Tabs from "./Tabs";
import { Row, Col } from "react-bootstrap";

{
  /* <Row className="banner align-items-center"></Row> */
}

export default function Header() {
  //handles the change of the page

  const [currentPage, setCurrentPage] = useState("Home");

  const pageChange = (page) => setCurrentPage(page);

  const displayPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Works") {
      return <Works />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return (
    <div>
      <Row className="banner align-items-center">
        <Col>
          <h1 className="name">Anthony Linebaugh</h1>
        </Col>
        <Col>
          <Tabs currentPage={currentPage} pageChange={pageChange} />
        </Col>
      </Row>
    </div>
  );
}
