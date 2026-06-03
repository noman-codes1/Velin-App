import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../styles/Notebook.module.css";
import Card from "./Card";
import { ChevronLeft, ChevronRight, MessageCircleWarning, X } from "lucide-react";
import { useState } from "react";

const Notebook = ({ dataArray, deleteFunction }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  //function for onChange
  const funcforOnChange = (e) => {
    setCurrentPage(1);
    setSearch(e.target.value);
  };

  // checking the current page, total pages and perform necessary calculations
  const contentPerPage = 6;
  const startIndex = (currentPage - 1) * contentPerPage;
  const endIndex = currentPage * contentPerPage;

  //to find what to render (btw it's just a if else)
  const displayArrayData =
    search === ""
      ? [...dataArray].reverse()
      : [...dataArray]
          .reverse()
          .filter((object) =>
            object.userDescr.toLowerCase().includes(search.toLowerCase()),
          );

  //counting the total Page including the search engine part
  const totalPage = Math.ceil(displayArrayData.length / contentPerPage);
  return (
    <div className={styles.component_border}>
      <div className={styles.container}>
        <div className={styles.heading_length}>
          <h1>Your Notebook</h1>
          <p>All Note ({displayArrayData.length})</p>
        </div>
        <div className={styles.inner_container}>
          <div className={styles.search_container}>
            <div className={styles.icon_wrapper}>
              <Search size={17} />
            </div>
            <input
              value={search}
              onChange={(e) => funcforOnChange(e)}
              type="text"
              placeholder="Search notes..."
            />
          </div>
          <Link to="/">
            <div className={styles.plus}>+</div>New Note
          </Link>
        </div>
      </div>

      {/* It contains cards */}
      <div className={styles.card_container}>
        {displayArrayData.length === 0 ? (
          <div className={styles.card_notFound}>
            <div className={styles.card_NF_icon}>
              <MessageCircleWarning size={80}/>
            </div>
            <h4>No notes found</h4>
            <p>
              We couldn't find anything matching your search. Try checking your
              spelling or searching for a different keyword.
            </p>
            <button type="button" onClick={() => setSearch("")}>
              <X size={14}/>
              Clear Search
            </button>
          </div>
        ) : (
          [...displayArrayData].slice(startIndex, endIndex).map((object) => {
            return (
              <Card
                key={object.id}
                cardData={object}
                itemToDeleteCard={deleteFunction}
              />
            );
          })
        )}
        {}
      </div>

      {/* Pagination */}
      {displayArrayData.length > 6 && (
        <div className={styles.pagination_button}>
          <button
            disabled={currentPage === 1}
            className={!(currentPage === 1) ? "" : styles.amDisabled}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ChevronLeft size={19} />
          </button>
          <button className={styles.current_pageNumber}>{currentPage}</button>
          <button
            className={!(currentPage === totalPage) ? "" : styles.amDisabled}
            disabled={currentPage === totalPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight size={19} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Notebook;
