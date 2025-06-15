import styles from "./Empty.module.scss";

export default function Empty() {
  return (
    <div className={styles.empty}>
      <img
        src="../public/empty.png"
        alt="empty-image"
        className={styles.empty__image}
      />
      <h3 className={styles.empty__text}>Empty...</h3>
    </div>
  );
}
