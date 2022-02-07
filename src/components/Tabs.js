import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Tabs() {
  const tabs = ["/React-Portfolio/", "/works", "/contact", "/resume"];
  const [active, setActive] = useState(tabs[0]); //for toggling the active tab

  const [navbarOpen, setNavbarOpen] = useState(false); //for toggling tab menu

  function handleTab(tab) {
    if (tab === tabs[0]) {
      return "About";
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

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose
            style={{ color: "#fff", width: "2.5rem", height: "2.5rem" }}
          />
        ) : (
          <IoIosOptions
            style={{ color: "white", width: "2.5rem", height: "2.5rem" }}
          />
        )}
      </button>
      <ul
        className={` menuNav ${
          navbarOpen ? "showMenu" : ""
        } justify-content-center display-5 `}
      >
        {tabs.map((tab) => (
          <li>
            <Link
              to={tab}
              key={tab.id}
              active={active === tab}
              onClick={() => {
                setActive(tab);
                closeMenu();
              }}
              className={
                window.location.pathname === tab
                  ? "tabs nav-item tab-active "
                  : "tabs nav-item"
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
