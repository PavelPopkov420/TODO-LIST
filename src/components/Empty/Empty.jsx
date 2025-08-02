import styles from "./Empty.module.scss";
import emptyImage from "../../../public/empty.png";

export default function Empty() {
  return (
    <div className={styles.empty}>
      <img src={emptyImage} alt="empty-image" className={styles.empty__image} />
      <h3 className={styles.empty__text}>Empty...</h3>
    </div>
  );
}
