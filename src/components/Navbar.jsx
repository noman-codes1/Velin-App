import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/logo.webp'
import styles from '../styles/Navbar.module.css'
import { PenTool } from "lucide-react";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.div_company}>
        <div className={styles.logo_wrapper}>
          <PenTool size={15}/>
        </div>
        <p>Velin App</p>
      </div>
      <div className={styles.div_navigation}>
        <NavLink to="/" className={({isActive}) => isActive ? styles.active : ""}>Home</NavLink> {/* Link renders as anchor tag */}
        <NavLink to="/viewnotes" className={({isActive}) => isActive? styles.active : ""}>View Notes</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive? styles.active : ""}>About</NavLink>
      </div>
    </div>
  );
}

export default Navbar