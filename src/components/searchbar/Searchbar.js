import React from "react";
import styles from "./searchbar.module.scss";
import { IconContext } from "react-icons/lib";
import * as MdIcons from "react-icons/md";

const Searchbar = () => {
  return (
    <>
      <h3 className={styles.requestTitle}>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className={styles.searchbarDiv}>
        <div className={styles.searchbar}>
          <input className={styles.inputbox} type="text" required />
          <label className={styles.inputLabel}>
            <span className={styles.labelContent}>Email address</span>
          </label>
        </div>
        <IconContext.Provider value={{ color: "white", size: "35px" }}>
          <button className={styles.emailButton} type="submit">
            Get Started
            <MdIcons.MdOutlineNavigateNext />
          </button>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Searchbar;
