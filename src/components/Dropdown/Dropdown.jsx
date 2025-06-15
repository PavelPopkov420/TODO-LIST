import { useState } from "react";
import styles from "./Dropdown.module.scss";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const [contentType, setContentType] = useState("ALL");

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div className={styles.list}>
      <div className={styles.list__filter} onClick={() => setIsOpen(!isOpen)}>
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.26154 4L4.63077 1"
              stroke="#F7F7F7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      <ul className={`${styles.list__dropdown} ${isOpen ? styles.active : ""}`}>
        <li
          className={styles.list__item}
          isActive={contentType === "ALL"}
          onClick={() => handleClick("ALL")}
        >
          All
        </li>
        <li
          className={styles.list__item}
          isActive={contentType === "Complete"}
          onClick={() => handleClick("Complete")}
        >
          Complete
        </li>
        <li
          className={styles.list__item}
          isActive={contentType === "Incomplete"}
          onClick={() => handleClick("Incomplete")}
        >
          Incomplete
        </li>
      </ul>
    </div>
  );
}
