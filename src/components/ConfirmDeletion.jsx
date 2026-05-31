import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ConfirmDeletion.module.css";
import { TriangleAlert, Trash } from "lucide-react";

//setDelete is a function passed... this is the better way
const ConfirmDeletion = ({dataId, elemToDel, setDelete }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.component_border}>
      <div className={styles.container}>
        <div className={styles.warningIcon_wrapper}>
          <TriangleAlert size={35} />
        </div>
        <h3 className={styles.heading}>Delete this note?</h3>
        <p className={styles.warning_para}>
          This action cannot be undone. This note will be permanently removed
          from your notebook.
        </p>
        <div className={styles.cancelDel_btn}>
          <button
            className={styles.cancel_btn}
            onClick={() => setDelete(false)}
          >
            Cancel
          </button>
          <button className={styles.del_btn} onClick={() => elemToDel(dataId)}>
            <Trash size={15} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletion;
