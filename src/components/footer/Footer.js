import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import { footerData } from "../../data/footerData";
import DropDown from "../dropdown/DropDown";

const Footer = ({ style }) => {
  return (
    <div style={style}>
      <div className={styles.footerData}>
        <p className={styles.questions}>
          Questions? Call
          <a className={styles.questionsLink} href="tel:0850-390-7444">
            0850-390-7444
          </a>
        </p>

        <ul className={styles.footerUL}>
          {footerData &&
            footerData.map((data, id) => (
              <li key={id} className={styles.footerList}>
                <Link to="/" className={styles.footerLink}>
                  {data}
                </Link>
              </li>
            ))}
        </ul>
        <div className={styles.dropdownDiv}>
          <DropDown className={styles.dropdown} />
        </div>
        <p className={styles.footerCountry}>Netflix Turkey</p>
      </div>
    </div>
  );
};

export default Footer;
