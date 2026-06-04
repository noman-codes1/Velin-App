import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import styles from "../styles/Navbar.module.css";
import { PenTool, X } from "lucide-react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //array to keep the navlink and render according
  //to the screen size
  const navArray = [
    { key: 1, path: "/", pageName: "Home" },
    { key: 2, path: "/viewnotes", pageName: "View Notes" },
    { key: 3, path: "/about", pageName: "About" },
  ];

  //function to check which page is on user and assign classes accordingly
  const userOnThisPage = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  return (
    <div className={styles.header}>
      <div className={styles.div_company}>
        <div className={styles.logo_wrapper}>
          <PenTool size={15} />
        </div>
        <p>Velin App</p>
      </div>
      <div className={styles.div_navigation}>
        {navArray.map((item) => {
          return (
            <NavLink key={item.key} to={item.path} className={userOnThisPage}>
              {item.pageName}
            </NavLink>
          );
        })}
      </div>
      <div className={styles.hambergur_cross}>
        {!isSidebarOpen ? (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={styles.icon_hambergur}
          >
            <FiMenu size={23} />
          </button>
        ) : (
          <div className={styles.sidebar}>
            <div className={styles.sidebar_divOne}>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className={styles.icon_cross}
              >
                <X size={23} />
              </button>
              <div>
                {navArray.map((item) => {
                  return (
                    <NavLink
                      key={item.key}
                      to={item.path}
                      className={userOnThisPage}
                    >
                      {item.pageName}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
