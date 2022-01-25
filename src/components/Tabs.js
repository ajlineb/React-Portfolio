import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabs() {
  const tabs = ["/home", "/works", "/contact", "/resume"];
  const [active, setActive] = useState(tabs[0]);

  return (
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
            {tab.substring(1).charAt(0).toUpperCase() +
              tab.slice(2, tab.length)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
