import React from "react";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import styles from "./paymentButton.module.scss";

const PaymentButton = ({ link, content, logo, size }) => {
  return (
    <div className={styles.buttons}>
      <Link to={link} className={styles.link}>
        <div className={styles.button}>
          <div className={styles.contentDiv}>
            <span className={styles.content}>{content}</span>
          </div>
          <div className={styles.logoDiv}>
            <img
              className={styles.logos}
              style={{ width: size }}
              src={require(`../../images/${logo}.png`)}
              alt="card"
            />
          </div>
          <MdIcons.MdOutlineNavigateNext className={styles.select} />
        </div>
      </Link>
    </div>
  );
};

export default PaymentButton;
