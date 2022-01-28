import React from "react";
import styles from "../styles/landingpage/landing.module.scss";
import netflix from "../images/logo.png";
import DropDown from "../components/DropDown";
import { IconContext } from "react-icons/lib";
import * as MdIcons from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={netflix} alt="netflix-logo" />
        <div className={styles.buttons}>
          <DropDown />
          <button className={styles.signinButton} type="submit">
            Sign In
          </button>
        </div>
      </div>
      <div className={styles.topTitle}>
        <h1 className={styles.mainTitle}>
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className={styles.secondaryTitle}>
          Watch anywhere. Cancel anytime.
        </h2>
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
      </div>
    </div>
  );
};

export default Header;
