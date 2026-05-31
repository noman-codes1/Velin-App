import React from "react";
import styles from "../styles/NotepadEditor.module.css";
import { useState, useEffect } from "react";
import RecentHistory from "./RecentHistory";

const NotepadEditor = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isDataPresent, setIsDataPresent] = useState(false)
  const [dataNote, setDataNote] = useState(JSON.parse(localStorage.getItem("noteData")) || [])

  //handling submission when the form is being submitted
  const handleSubmit = (e) => {
    e.preventDefault()
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
    if (dataNote.length === 0){
      setIsDataPresent(false)
    } else {
      setIsDataPresent(true)
    }
    // setIsDataPresent(!!JSON.parse(localStorage.getItem("noteData")))
  }, [])

  //handling deletion of
  const deleteFunction = (deleteItemId)=>{
    const arrayAfterDeletion = dataNote.filter(elem => elem.id != deleteItemId)
    localStorage.setItem("noteData", JSON.stringify(arrayAfterDeletion))
    setDataNote(arrayAfterDeletion)

    //checking and stopping the conditional execution if empty array is present
    if(arrayAfterDeletion.length === 0){
      setIsDataPresent(false)
    }
  }
  

  return (
    <div>
      {/* This is part of NoteEditor component */}
      <div className={styles.component_border}>
        <h1 className={styles.heading}>Capture your thoughts.</h1>
        <p className={styles.dialog}>
          A minimalist space for your ideas, meetings, and daily reflections.
        </p>
        <form onSubmit={(event) => handleSubmit(event)} className={styles.editor}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your note a title..."
            required
            maxLength="200"
          />
          <textarea
            name="description"
            id=""
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Start typing your thoughts here..."
            required
            maxLength="3200"
          ></textarea>
          <div>
            <p>{desc.length}/3200</p>
            <button type="submit">
              Save Note
            </button>
          </div>
        </form>
      </div>

      {/* Putting here a dynamic content */}
      <RecentHistory isPresent={isDataPresent} dataArray={dataNote} itemToDeleteRH={deleteFunction}/>
    </div>
  );
};

export default NotepadEditor;
