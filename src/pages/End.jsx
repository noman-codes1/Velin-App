import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import styles from '../styles/End.module.css'
import { Helmet } from "react-helmet-async";

const End = () => {
  return (
    <div className={styles.component_border}>
      <Helmet>
        <title>You have reached death</title>
      </Helmet>
      <p className={styles.para_one}>Project Complete</p>
      <h1>You have reached the end of the project.</h1>
      <p className={styles.para_two}>
        Thank you for visiting and exploring this application.
      </p>
      <div className={styles.container}>
        <a
          href="https://github.com/noman-codes1/Velin-App"
          target="_blank"
          className={styles.github}
        >
          <div className={styles.github_icon}>
            <FaGithub />
          </div>
          View Source Code
        </a>
        <Link to="/" className={styles.home}>
          Back To Home
          <div className={styles.arrow_icon}>
            <FaArrowRight size={12} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default End;
