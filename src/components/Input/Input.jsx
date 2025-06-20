import { useState } from "react";
import styles from "./Input.module.scss";

export default function Input({
  placeholder = "Search note...",
  value,
  onChange,
  onKyeDown,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
      onKeyDown={onKyeDown}
    />
  );
}
