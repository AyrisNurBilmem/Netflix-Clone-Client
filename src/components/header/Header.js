import React from "react";
import styles from "../../pages/landing/landing.module.scss";
import netflix from "../../images/logo.png";
import DropDown from "../dropdown/DropDown";
import Searchbar from "../searchbar/Searchbar";

const Header = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={netflix} alt="netflix-logo" />
        <div className={styles.buttons}>
          <div className={styles.dropdownDiv}>
            <DropDown />
          </div>
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
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
