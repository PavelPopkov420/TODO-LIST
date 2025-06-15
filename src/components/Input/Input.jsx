import { useState } from "react";
import styles from "./Input.module.scss";

export default function Input({ onChangeCb, placeholder = "Search note..." }) {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  console.log(value);
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}
