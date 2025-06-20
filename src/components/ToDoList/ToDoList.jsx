import Empty from "../Empty/Empty";

import ToDoItem from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.scss";
export default function ToDoList({ tasks, changeList }) {
  const deleteTask = (id) => {
    const filtredTasks = tasks.filter((obj) => obj.id !== id);
    changeList(filtredTasks);
  };
  return (
    <>
      <div className={styles.content}>
        {tasks.map((item) => (
          <ToDoItem
            key={item.id}
            id={item.id}
            text={item.text}
            onDelete={deleteTask}
          />
        ))}
        {tasks?.length === 0 && <Empty />}
      </div>
    </>
  );
}
