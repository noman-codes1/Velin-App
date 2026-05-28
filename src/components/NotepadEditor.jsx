import React from "react";
import styles from "../styles/NotepadEditor.module.css";

const NotepadEditor = () => {
  return (
    <div className={styles.component_border}>
      <h1 className={styles.heading}>Capture your thoughts.</h1>
      <p className={styles.dialog}>
        A minimalist space for your ideas, meetings, and daily reflections.
      </p>
      <form action="" className={styles.editor}>
        <input
          type="text"
          placeholder="Give your note a title..."
        />
        <textarea
          name="description"
          id=""
          placeholder="Start typing your thoughts here..."
        ></textarea>
        <div>
          <p>2/74</p>
          <button type="button">
            Save Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotepadEditor;
