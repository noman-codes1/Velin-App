import React from "react";
import { Eye, Lock, Zap } from "lucide-react";
import styles from "../styles/About.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Navbar />
      <div className={styles.component_border}>
        <h1>About Velin App</h1>
        <p className={styles.para_one}>
          A quiet place for your thoughts, built for absolute clarity.
        </p>
        <p className={styles.para_two}>
          We believe that writing should be a deeply personal, uncluttered
          experience. In a world full of notifications, endless toolbars, and
          feature bloat, NotesApp was created to be the exact opposite. It is a
          minimalist sanctuary for your ideas. By stripping away everything that
          isn't essential, we've created a focused environment where the only
          thing that matters is the text on the screen. No distractions, no
          steep learning curves—just you and your thoughts.
        </p>
        <div className={styles.container}>
          <div className={styles.inner_container}>
            <div className={styles.icon_wrapper}>
              <Eye size={21} />
            </div>
            <h4>Pure Focus</h4>
            <p>Clean text editor with zero distractions.</p>
          </div>
          <div className={styles.inner_container}>
            <div className={styles.icon_wrapper}>
              <Lock size={21} />
            </div>
            <h4>Local Save</h4>
            <p>Notes saved instantly to local storage</p>
          </div>
          <div className={styles.inner_container}>
            <div className={styles.icon_wrapper}>
              <Zap size={21} />
            </div>
            <h4>Light & Fast</h4>
            <p>A weightless interface designed to load instantly</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
