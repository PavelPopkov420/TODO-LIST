import Empty from "../Empty/Empty";
import ToDoItem from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.scss";

export default function ToDoList({ tasks, changeList, onChange }) {
  const deleteTask = (id) => {
    const filtredTasks = tasks.filter((obj) => obj.id !== id);
    changeList(filtredTasks);
    onChange(id);
  };

  const currentChangeItem = (id) => {
    const newArr = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    changeList(newArr);
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
            isComplete={false}
            onClick={currentChangeItem}
          />
        ))}
        {tasks?.length === 0 && <Empty />}
      </div>
    </>
  );
}
