import React from "react";
import styles from "./inputbox.module.scss";
const InputBox = () => {
  return (
    <div className={styles.inputdiv}>
      <input className={styles.inputbox} type="text" required />
      <label className={styles.inputLabel}>
        <span className={styles.labelContent}>Gift Card Pin or Code</span>
      </label>
    </div>
  );
};

export default InputBox;
