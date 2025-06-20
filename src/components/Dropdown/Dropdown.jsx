import { useState } from "react";
import styles from "./Dropdown.module.scss";
import DropDownItem from "../DropDownItem/DropDownItem";

export default function Dropdown({ onClick, currFilter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const [contentType, setContentType] = useState("All");

  function handleClick(type) {
    setContentType(type);
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={styles.list} onClick={onClick}>
      <div
        className={styles.list__filter}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {contentType}
        {isOpen ? (
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6308 4L1.26157 1"
              stroke="#F7F7F7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 1L4.63077 4"
              stroke="#F7F7F7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.63077 1L8 4"
              stroke="#F7F7F7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.26154 4L4.63077 1"
              stroke="#F7F7F7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {isOpen ? (
        <ul className={`${styles.list__dropdown} ${styles.active}`}>
          <DropDownItem
            contentType={"All"}
            isActive={contentType === "All"}
            onClick={() => handleClick("All")}
          />
          <DropDownItem
            contentType={"Complete"}
            isActive={contentType === "Complete"}
            onClick={() => handleClick("Complete")}
          />
          <DropDownItem
            contentType={"Incomplete"}
            isActive={contentType === "Incomplete"}
            onClick={() => handleClick("Incomplete")}
          />
        </ul>
      ) : null}
    </div>
  );
}
