import React from "react";
import { Trash } from "lucide-react";
import { Clock3 } from "lucide-react";
import styles from "../styles/Card.module.css";
import { getTheTime } from "../utils/date";
import { useNavigate } from "react-router-dom";
import ConfirmDeletion from "./ConfirmDeletion";
import { useState } from "react";

const Card = ({ cardData, itemToDeleteCard }) => {
  const [showComponentDeletion, setShowComponentDeletion] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.component_border}>
      <h4 className={styles.user_title}>{cardData.userTitle}</h4>
      <p
        onClick={() => navigate(`/viewnotes/${cardData.id}`)}
        className={styles.user_description}
      >
        {cardData.userDescr}
      </p>
      <div className={styles.container}>
        <div className={styles.time}>
          <div>
            <Clock3 size={16} />
          </div>
          <p>{getTheTime(cardData.createdAt)}</p>
        </div>
        <div
          onClick={() => setShowComponentDeletion(true)}
          className={styles.icon_wrapper}
        >
          <Trash size={16} />
        </div>
      </div>
      {showComponentDeletion && (
        <ConfirmDeletion
          dataId = {cardData.id}
          elemToDel={itemToDeleteCard}
          setDelete={setShowComponentDeletion}
        />
      )}
    </div>
  );
};

export default Card;
