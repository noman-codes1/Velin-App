import React from "react";
import { Link } from "react-router-dom";
import { FolderOpen } from "lucide-react";
import styles from "../styles/EmptyNotebook.module.css"

const EmptyNotebook = () => {
  return (
    <div className={styles.component_border}>
      <h1 className={styles.heading}>Your Notebook</h1>
      <div className={styles.container}>
        <div className={styles.icon_wrapper}>
            <FolderOpen size={90}/>
        </div>
        <p>It's quiet in here... You haven't saved any notes yet.</p>
        <Link to="/"><div className={styles.plus}>+</div>Create Your First Note</Link>
      </div>
    </div>
  );
};

export default EmptyNotebook;
