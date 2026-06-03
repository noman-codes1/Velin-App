import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import styles from '../styles/End.module.css'

const End = () => {
  return (
    <div className={styles.component_border}>
      <p className={styles.para_one}>Project Complete</p>
      <h1>You have reached the end of the project.</h1>
      <p className={styles.para_two}>Thank you for visiting and exploring this application.</p>
      <div className={styles.container}>
        <a href="#" className={styles.github}>
          <div className={styles.github_icon}>
            <FaGithub />
          </div>
          View Source Code
        </a>
        <Link to="/" className={styles.home}>
          Back To Home
          <div className={styles.arrow_icon}>
            <FaArrowRight size={12}/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default End;
