import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Tabs() {
  const tabs = ["", "works", "contact", "resume"];
  const [active, setActive] = useState(tabs[0]); //for toggling the active tab

  const [navbarOpen, setNavbarOpen] = useState(false); //for toggling tab menu

  //handles the name of the tabs
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
  //handles the toggle for the tabs bar
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  //closes the tab bar after clicking nav item
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const path = window.location.pathname.split("/");

  //for getting the about path since the array becomes only 2 length
  const getPath = () => {
    if (path.length < 3) {
      return "";
    } else return path[2];
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
              onClick={() => {
                setActive(tab);
                closeMenu();
              }}
              className={
                getPath() === tab
                  ? "tabs nav-item tab-active "
                  : "tabs nav-item"
              }
            >
              {handleTab(tab)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
