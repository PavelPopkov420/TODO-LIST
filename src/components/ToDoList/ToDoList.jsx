import Empty from "../Empty/Empty";
import ToDoItem from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.scss";

export default function ToDoList({ task }) {
  return (
    <>
      <div className={styles.content}>
        {task.map((item, index) => (
          <ToDoItem key={index} {...item} />
        ))}
        {task?.length === 0 && <Empty />}
      </div>
    </>
  );
}
