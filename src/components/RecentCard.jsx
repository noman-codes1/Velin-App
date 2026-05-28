import React from "react";
import { Trash } from "lucide-react";
import { Clock3 } from "lucide-react";
import styles from '../styles/RecentCard.module.css'

const RecentCard = () => {
  return (
    <div className={styles.component_border}>
      <h3 className={styles.user_title}>Product Strategy Q3</h3>
      <p className={styles.user_description}>
        {/* {dataOne.userDescription} */}
      </p>
      <div className={styles.container}>
        <div className={styles.time}>
            <div>
                <Clock3 size={18}/>
            </div>
            <p>2 mins ago</p>
        </div>
        <div className={styles.icon_wrapper}>
          <Trash size={18}/>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
