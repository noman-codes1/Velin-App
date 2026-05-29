import React from "react";
import { Trash } from "lucide-react";
import { Clock3 } from "lucide-react";
import styles from '../styles/RecentCard.module.css'
import { getTheTime } from "../utils/date";

const RecentCard = ({cardData, itemToDeleteRC}) => {

  return (
    <div className={styles.component_border}>
      <h3 className={styles.user_title}>{cardData.userTitle}</h3>
      <p className={styles.user_description}>
        {cardData.userDescr}
      </p>
      <div className={styles.container}>
        <div className={styles.time}>
            <div>
                <Clock3 size={18}/>
            </div>
            <p>{getTheTime(cardData.createdAt)}</p>
        </div>
        <div onClick={()=> itemToDeleteRC(cardData.id)} className={styles.icon_wrapper}>
          <Trash size={18}/>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
