import React from "react";
import { FileText } from "lucide-react";
import styles from "../styles/RecentHistory.module.css";
import RecentCard from "./RecentCard";

const RecentHistory = ({ isPresent }) => {

  return (
    <div
      className={
        !isPresent
          ? styles.component_borders_noData
          : styles.component_borders_data
      }
    >
      <h2 className={styles.heading}>Recent Notes</h2>
      {!isPresent ? (
        <div className={styles.container}>
          <div className={styles.icon_wrapper}>
            <FileText size={34} />
          </div>
          <p className={styles.para_one}>No notes yet</p>
          <p className={styles.para_two}>
            Your recent thoughts will appear here. Start writing above!
          </p>
        </div>
      ) : (
        <div className={styles.card}>
          <RecentCard />
          <RecentCard />
          <RecentCard />
        </div>
      )}
    </div>
  );
};

export default RecentHistory;
