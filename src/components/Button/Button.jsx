import styles from "./Button.module.scss";

export default function Button({
  children,
  className = "",
  onClick,
  isActive,
}) {
  return (
    <button
      className={`${styles.button} ${className} ${
        isActive ? styles.active : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
