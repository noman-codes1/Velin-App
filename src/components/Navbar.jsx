import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.webp'
import styles from '../styles/Navbar.module.css'
import { PenTool } from "lucide-react";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.div_company}>
        <img src={logo} alt="" /> {/* added a lucide icon here */}
        <p>Velin</p>
      </div>
      <div className={styles.div_navigation}>
        <Link to="/">Home</Link> {/* Link renders as anchor tag */}
        <Link to="/viewnotes">View Notes</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar