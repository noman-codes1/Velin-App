import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import styles from "../styles/SecurityPopup.module.css";
import { useState } from "react";

const SecurityPopup = ({ setHasCheckedFn }) => {
  //state to activate button when the checkbox is clicked
  const [activateButton, setActivateButton] = useState(false);

  //encoding for safe travel
  const subject = encodeURIComponent("Regarding ");
  const body = encodeURIComponent(`Hi Noman,\n\nI am her for `);

  return (
    <div className={styles.component_border}>
      <div className={styles.container}>
        <div className={styles.icon_wrapper}>
          <FaShieldAlt size={22} />
        </div>
        <h1 className={styles.heading}>Important Security Notice</h1>
        <p className={styles.para}>
          Your data is stored locally in your browser and is not saved on our
          servers. Please do not store passwords, banking details, government
          IDs, or other sensitive information.
        </p>
        <p className={styles.para}>
          This project is intended for learning, testing, and non-sensitive
          notes. You are responsible for the information you choose to store.
        </p>
        <p className={styles.another_para}>
          Questions or feedback? Contact:{" "}
          <a
            href={`mailto:hi@meetnoman.com?subject=${subject}&body=${body}`}
            rel="noopener noreferrer"
          >
            hi@meetnoman.com
          </a>
        </p>
        <div className={styles.checkbox_statement}>
          <input
            onChange={(e) => setActivateButton(e.target.checked)}
            checked={activateButton}
            type="checkbox"
            name=""
            id=""
          />
          <p>I understand the risks and wish to continue</p>
        </div>
        <div className={styles.button_wrapper}>
          <button
            onClick={() => window.history.back()}
            className={styles.exitBtn}
          >
            Exit Website
          </button>
          <button
            onClick={() => setHasCheckedFn(true)}
            disabled={activateButton === false}
            className={
              activateButton
                ? styles.contBtn
                : `${styles.contBtn} ${styles.disabled}`
            }
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityPopup;
