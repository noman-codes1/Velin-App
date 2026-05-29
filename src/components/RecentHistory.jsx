import React from "react";
import { FileText } from "lucide-react";
import styles from "../styles/RecentHistory.module.css";
import RecentCard from "./RecentCard";

const RecentHistory = ({ isPresent, dataArray }) => {
  console.log(dataArray[dataArray.length-1])

  return (
    // checking which one to render
    <div
      className={
        !isPresent
          ? styles.component_borders_noData
          : styles.component_borders_data
      }
    >
      <h2 className={styles.heading}>Recent Notes</h2>

      {/* This will render based on conditons coming from upper tree */}
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
          {/* This helps to get the fill exact data in the card and
          also do the sorting stuff */}
          {dataArray.slice(-3).reverse().map((noteObject)=>{
            return <RecentCard key={noteObject.id} cardData={noteObject}/>
          })}
        </div>
      )}
    </div>
  );
};

export default RecentHistory;
