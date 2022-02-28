import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./searchbar.module.scss";
import { IconContext } from "react-icons/lib";
import * as MdIcons from "react-icons/md";
import { UserContext } from "../../context/UserContext";

const Searchbar = () => {
  const emailContext = useContext(UserContext);
  console.log(emailContext);
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
          <Link className={styles.buttonLink} to="/signup/registration">
            <button className={styles.emailButton} type="submit">
              Get Started
              <MdIcons.MdOutlineNavigateNext />
            </button>
          </Link>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Searchbar;
