import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./OverLay.module.scss";
export default function OverLay({ isActive, onClose, onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    onAddTask(inputValue);
    setInputValue((prev) => (prev = ""));
    onClose();
  }

  const handelKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      {isActive ? (
        <div className={`${styles.overlay} ${isActive ? styles.active : ""}`}>
          <h3 className={styles.overlay__title}>NEW NOTE</h3>
          <Input
            className={styles.overlay__input}
            placeholder="Input your note..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKyeDown={handelKeyDown}
          />
          <div className={styles.overlay__btns}>
            <Button className={styles.overlay__btn} onClick={onClose}>
              CANCEL
            </Button>
            <Button className={styles.overlay__btn} onClick={handleAddTask}>
              APPLY
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
