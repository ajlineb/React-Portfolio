import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/ajlineb">
        <img
          src={require("../images/GitHub-Mark-Light-64px.png")}
          alt="github"
        />
      </a>
      <a href="https://www.linkedin.com/in/anthjlin/">
        <img
          id="linkedin"
          src={require("../images/LI-In-Bug.png")}
          alt="linkedin"
        />
      </a>
    </div>
  );
}
