import React from "react";
import styles from "../styles/landing.module.css";
import netflix from "../images/logo.png";
import * as MdIcons from "react-icons/md";
import DropDown from "./DropDown";
import { IconContext } from "react-icons/lib";

const Landing = () => {
  return (
    <div>
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
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <form>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className={styles.searchbar}>
              <input
                className={styles.inputbox}
                type="text"
                placeholder="Email address"
              />
              <IconContext.Provider value={{ color: "white", size: "35px" }}>
                <button className={styles.emailButton} type="submit">
                  Get Started
                  <MdIcons.MdOutlineNavigateNext />
                </button>
              </IconContext.Provider>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.adContainer}></div>
      <div className={styles.adContainer}></div>
      <div className={styles.adContainer}></div>
      <div className={styles.adContainer}></div>
      <div className={styles.faqContainer}></div>
      <div className={styles.detailsContainer}></div>
    </div>
  );
};

export default Landing;
