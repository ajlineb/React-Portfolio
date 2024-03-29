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
      <div>
        <p className="closing">
          Created By Anthony Linebaugh with ❤️{" "}
          <a href="https://github.com/ajlineb/React-Portfolio" target="_github">
            {" "}
            Source Code
          </a>
        </p>
        <p className="time-stamp">Last update: 01/017/2023 at 7:43 pm EST</p>
        <p className="closing">© 2022 - 2023 </p>
      </div>
    </div>
  );
}
