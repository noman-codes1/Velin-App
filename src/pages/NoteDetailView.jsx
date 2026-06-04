import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Trash } from "lucide-react";
import styles from "../styles/NoteDetailView.module.css";
import { getTheTime } from "../utils/date";
import ConfirmDeletion from "../components/ConfirmDeletion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const NoteDetailView = () => {
  const [showDeleteComponent, setShowDeleteComponent] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams(); //params gives JS object of id.. and we are destructuring here
  console.log(id);

  //getting data from the localstorage
  const localData = JSON.parse(localStorage.getItem("noteData")) || [];

  //finding the correct card (btw it does not return a array)
  const dataObject = localData.find((elem) => elem.id === id);

  //processing the deletion button
  const deleteThisElement = (parameter=undefined) => {
    const arrayAfterDeletion = localData.filter((delItem) => delItem.id != id);
    localStorage.setItem("noteData", JSON.stringify(arrayAfterDeletion));
    navigate(-1);
  };

  return (
    <div>
      <Helmet>
        <title>{dataObject.userTitle}</title>
      </Helmet>
      {!!dataObject && (
        <div>
          <Navbar />
          <div className={styles.border_ofNDV}>
            <div className={styles.container}>
              <div className={styles.container_divOne}>
                <button onClick={() => navigate(-1)}>
                  <ChevronLeft size={15} />
                  Back to Notes
                </button>
                <p>~ {getTheTime(dataObject.createdAt)}</p>
              </div>
              <h1 className={styles.heading}>{dataObject.userTitle}</h1>
              <div className={styles.description}>{dataObject.userDescr}</div>
              <div className={styles.container_divTwo}>
                <button disabled className={styles.edit_btn}>
                  Edit Note
                </button>
                <button
                  onClick={() => setShowDeleteComponent(true)}
                  className={styles.delete_btn}
                >
                  <Trash size={14} /> Delete
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
      {showDeleteComponent && (
        <ConfirmDeletion
          elemToDel={deleteThisElement}
          setDelete={setShowDeleteComponent}
        />
      )}
    </div>
  );
};

export default NoteDetailView;
