import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./OverLay.module.scss";
export default function OverLay({ isActive, onClose, onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    onAddTask(inputValue);
    setInputValue("");
  }

  return (
    <div className={`${styles.overlay} ${isActive ? styles.active : ""}`}>
      <h3 className={styles.overlay__title}>NEW NOTE</h3>
      <Input
        className={styles.overlay__input}
        placeholder="Input your note..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={styles.overlay__btns}>
        <Button className={styles.overlay__btn} onClick={onClose}>
          CANCEL
        </Button>
        <Button className={styles.overlay__btn} onAddTask={handleAddTask}>
          APPLY
        </Button>
      </div>
    </div>
  );
}
