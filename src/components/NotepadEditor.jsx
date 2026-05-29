import React from "react";
import styles from "../styles/NotepadEditor.module.css";
import { useState, useEffect } from "react";
import RecentHistory from "./RecentHistory";

const NotepadEditor = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isDataPresent, setIsDataPresent] = useState(false)
  const [dataNote, setDataNote] = useState(JSON.parse(localStorage.getItem("noteData")) || [])

  const handleSubmit = () => {
    
    //getting old data and merging it with new data basically replacing
    //a whole array because array gets replaced
    const oldNote = dataNote
    const newNote = {
      id : crypto.randomUUID(),
      userTitle : title,
      userDescr : desc,
      createdAt : Date.now()
    }
    const updatedArray = [...oldNote, newNote]
    localStorage.setItem("noteData", JSON.stringify(updatedArray))
    setDataNote(updatedArray)
    console.log(dataNote)

    //reseting the state
    setTitle("")
    setDesc("")

    //knowing the data was submitted
    alert("Data is successfully saved")

    //changing the UI state of the Recent History when submit 
    //button is clicked (Not Present UI vs Present UI)
    setIsDataPresent(true)
  };

  //to toggle the UI in the 'Recent History' for the first time
  useEffect(() => {
    setIsDataPresent(!!JSON.parse(localStorage.getItem("noteData")))
  }, [])
  

  return (
    <div>
      {/* This is part of NoteEditor component */}
      <div className={styles.component_border}>
        <h1 className={styles.heading}>Capture your thoughts.</h1>
        <p className={styles.dialog}>
          A minimalist space for your ideas, meetings, and daily reflections.
        </p>
        <form action="" className={styles.editor}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your note a title..."
          />
          <textarea
            name="description"
            id=""
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Start typing your thoughts here..."
          ></textarea>
          <div>
            <p>2/74</p>
            <button type="button" onClick={handleSubmit}>
              Save Note
            </button>
          </div>
        </form>
      </div>

      {/* Putting here a dynamic content */}
      <RecentHistory isPresent={isDataPresent} dataArray={dataNote}/>
    </div>
  );
};

export default NotepadEditor;
