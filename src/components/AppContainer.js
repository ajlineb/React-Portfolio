import React, { useState } from "react";
import Tabs from "./Tabs";
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

export default function AppContainer() {
  //will determine which tab the user is on
  const [currentPage, setCurrentPage] = useState("Home");

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
  //handles the change of the page
  const pageChange = (page) => setCurrentPage(page);

  return (
    <div className="container-fluid">
      <Tabs currentPage={currentPage} pageChange={pageChange} />
      {displayPage()}
      <div className="footer-container">
        <div className="footer">
          <a href="https://github.com/ajlineb">
            <img
              src={require("./images/GitHub-Mark-Light-64px.png")}
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/anthjlin/">
            <img
              id="linkedin"
              src={require("./images/LI-In-Bug.png")}
              alt="linkedin"
            />
          </a>
          <a>
            <img></img>
          </a>
        </div>
      </div>
    </div>
  );
}
