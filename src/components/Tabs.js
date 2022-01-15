import React from "react";

export default function Tabs({ currentPage, pageChange }) {
  //These are each of the tabs
  //depending on which tab is clicked sends the pageChange function the page that was clicked
  //also activates that tab
  return (
    // <h1 className="name display-6">Anthony Linebaugh</h1>
    <ul className="tabs-container justify-content-center display-6">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => pageChange("Home")}
          className={currentPage === "Home" ? "tabs tab-active" : "tabs"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#works"
          onClick={() => pageChange("Works")}
          className={currentPage === "Works" ? "tabs tab-active" : "tabs"}
        >
          Works
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => pageChange("Contact")}
          className={currentPage === "Contact" ? "tabs tab-active" : "tabs"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => pageChange("Resume")}
          className={currentPage === "Resume" ? "tabs tab-active" : "tabs"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
