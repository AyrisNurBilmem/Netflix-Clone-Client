import React from "react";
import styles from "./dropdown.module.scss";

const DropDown = () => {
  return (
    <div className={styles.dropdown}>
      <select className={styles.list}>
        <option className={styles.item} value="english">
          English
        </option>
        <option className={styles.item} value="turkish">
          Turkish
        </option>
      </select>
    </div>
  );
};

export default DropDown;
