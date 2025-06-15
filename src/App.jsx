import { useState } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Input from "./components/Input/Input";
import LayOut from "./components/LayOut/LayOut";
import OverLay from "./components/Overlay/OverLay";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ToDoList from "./components/ToDoList/ToDoList";

export default function App() {
  const [active, setActive] = useState(false);
  const [tasks, setTasks] = useState([]);

  function getActive() {
    setActive(!active);
  }

  function addTask(text) {
    setTasks([...tasks, { id: Date.now(), text }]);
  }

  const [dropdown, setDropDown] = useState(false);

  function getDropDown() {
    setDropDown(!dropdown);
  }

  return (
    <LayOut>
      <main>
        <h1 className={styles.title}>TODO LIST</h1>
        <div className={styles.content}>
          <Input />
          <Dropdown onClick={getDropDown} />
          <ThemeToggle />
        </div>
        <ToDoList task={tasks} />
        <OverLay isActive={active} onClose={getActive} onClick={addTask} />
        <Button className={styles.btn} onClick={getActive}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 22.5C10.5 22.8978 10.658 23.2794 10.9393 23.5607C11.2206 23.842 11.6022 24 12 24C12.3978 24 12.7794 23.842 13.0607 23.5607C13.342 23.2794 13.5 22.8978 13.5 22.5V13.5H22.5C22.8978 13.5 23.2794 13.342 23.5607 13.0607C23.842 12.7794 24 12.3978 24 12C24 11.6022 23.842 11.2206 23.5607 10.9393C23.2794 10.658 22.8978 10.5 22.5 10.5H13.5V1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0C11.6022 0 11.2206 0.158035 10.9393 0.43934C10.658 0.720644 10.5 1.10218 10.5 1.5V10.5H1.5C1.10218 10.5 0.720644 10.658 0.43934 10.9393C0.158035 11.2206 0 11.6022 0 12C0 12.3978 0.158035 12.7794 0.43934 13.0607C0.720644 13.342 1.10218 13.5 1.5 13.5H10.5V22.5Z"
              fill="#F7F7F7"
            />
          </svg>
        </Button>
      </main>
    </LayOut>
  );
}
