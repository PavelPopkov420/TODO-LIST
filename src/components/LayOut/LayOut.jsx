import styles from "./LayOut.module.scss";

export default function LayOut({ children }) {
  return <div className={styles.container}>{children}</div>;
}
