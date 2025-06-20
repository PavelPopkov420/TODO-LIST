import styles from "./DropDownItem.module.scss";

export default function DropDownItem({ contentType, onClick, isActive }) {
  return (
    <>
      <li className={styles.list__item} onClick={onClick} isActive={isActive}>
        {contentType}
      </li>
    </>
  );
}
