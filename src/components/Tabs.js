import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabs() {
  const tabs = ["/React-Portfolio/", "/works", "/contact", "/resume"];
  const [active, setActive] = useState(tabs[0]);
  console.log(tabs[0]);

  function handleTab(tab) {
    if (tab === tabs[0]) {
      return "Home";
    }
    if (tab === tabs[1]) {
      return "Works";
    }
    if (tab === tabs[2]) {
      return "Contact";
    } else {
      return "Resume";
    }
  }

  return (
    <nav>
      <ul className="justify-content-center display-6">
        {tabs.map((tab) => (
          <li>
            <Link
              to={tab}
              key={tab.id}
              active={active === tab}
              onClick={() => setActive(tab)}
              className={
                window.location.pathname === tab ? "tabs tab-active" : "tabs"
              }
            >
              {/* {tab.substring(1).charAt(0).toUpperCase() +
                tab.slice(2, tab.length)} */}
              {handleTab(tab)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
