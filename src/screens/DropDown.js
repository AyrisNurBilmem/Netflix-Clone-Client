import React from "react";
import styles from "../styles/landing.module.css";

const DropDown = () => {
  return (
    <div className={styles.dropdown}>
      <select className={styles.list}>
        <i class="fa fa-address-book-o" aria-hidden="true"></i>
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
