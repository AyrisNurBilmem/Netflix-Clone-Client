import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <Link className={styles.linkTag} to="/">
          <div className={styles.links}>
            <img className={styles.logo} src={logo} alt="logo" />
            <p className={styles.signin}>
              <Link to="/signin" className={styles.linkTag}>
                Sign In
              </Link>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
