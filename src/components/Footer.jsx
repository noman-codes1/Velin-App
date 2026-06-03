import React from "react";
import styles from "../styles/Footer.module.css";
import { PenTool } from "lucide-react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.component_border}>
      <div className={styles.div_one}>
        <div className={styles.icon_wrapper}>
          <PenTool size={18} />
        </div>
        <p>&copy; Velin App. Minimalism meets utilty.</p>
      </div>
      <div className={styles.div_two}>
        <Link to="/end">Privacy</Link>
        <Link to="/end">Terms</Link>
        <Link to="/end">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;
