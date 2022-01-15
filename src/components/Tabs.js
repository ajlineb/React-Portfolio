import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tabs() {
  const tabs = ["/home", "/works", "/contact", "/resume"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <ul className="tabs-container justify-content-center display-6">
      {tabs.map((tab) => (
        <li>
          <Link
            to={tab}
            key={tab}
            active={active === tab}
            onClick={() => setActive(tab)}
            className={
              window.location.pathname === tab ? "tabs tab-active" : "tabs"
            }
          >
            {tab.substring(1).charAt(0).toUpperCase() +
              tab.slice(2, tab.length)}
          </Link>
        </li>
      ))}
      {/* <li className="nav-item">
        <Link to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/works">Works</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/resume">Resume</Link>
      </li> */}
    </ul>
  );
}

// export default function Tabs({ currentPage, pageChange }) {
//   //These are each of the tabs
//   //depending on which tab is clicked sends the pageChange function the page that was clicked
//   //also activates that tab
//   return (
//     <Row className="banner align-items-center">
//       <Col md="6">
//         <h1 className="name display-6">Anthony Linebaugh</h1>
//       </Col>
//       <Col md="6">
//         <ul className="tabs-container justify-content-center display-6">
//           <li className="nav-item">
//             <a
//               href="#home"
//               onClick={() => pageChange("Home")}
//               className={currentPage === "Home" ? "tabs tab-active" : "tabs"}
//             >
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               href="#works"
//               onClick={() => pageChange("Works")}
//               className={currentPage === "Works" ? "tabs tab-active" : "tabs"}
//             >
//               Works
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               href="#contact"
//               onClick={() => pageChange("Contact")}
//               className={currentPage === "Contact" ? "tabs tab-active" : "tabs"}
//             >
//               Contact
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               href="#resume"
//               onClick={() => pageChange("Resume")}
//               className={currentPage === "Resume" ? "tabs tab-active" : "tabs"}
//             >
//               Resume
//             </a>
//           </li>
//         </ul>
//       </Col>
//     </Row>
//   );
// }
