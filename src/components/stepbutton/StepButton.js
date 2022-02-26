import React from "react";
import { Link } from "react-router-dom";
import styles from "./stepbutton.module.scss";

const StepButton = ({ content, link, width }) => {
  return (
    <>
      <Link to={link}>
        <div className={styles.buttonCard} style={{ maxWidth: width }}>
          <button className={styles.nextbtn} type="submit">
            {content}
          </button>
        </div>
      </Link>
    </>
  );
};

export default StepButton;
