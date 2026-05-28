import React from "react";
import styles from "../styles/Footer.module.css";
import { PenTool } from "lucide-react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.component_border}>
      <div className={styles.div_one}>
        <div>
          <PenTool size={18} color="white"/>
        </div>
        <p>&copy; VelinApp. Minimalism meets utilty.</p>
      </div>
      <div className={styles.div_two}>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;
