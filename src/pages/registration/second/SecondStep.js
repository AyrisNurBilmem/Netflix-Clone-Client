import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./secondstep.module.scss";
import checkmark from "../../../images/Checkmark.png";
import Footer from "../../../components/footer/Footer";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons/lib";

const SecondStep = () => {
  return (
    <>
      <div className={styles.wholepage}>
        <Navbar />
        <div className={styles.middlepart}>
          <div className={styles.centerContainer}>
            <div className={styles.planCard}>
              <div className={styles.imgContainer}>
                <img
                  className={styles.checkmark}
                  src={checkmark}
                  alt="checkmark"
                />
              </div>
              <div className={styles.headerContainer}>
                <div className={styles.header}>
                  <span className={styles.stepCount}>
                    STEP <strong>2</strong> OF <strong>3</strong>
                  </span>
                  <h1 className={styles.title}>Choose your plan.</h1>
                </div>
              </div>
              <div className={styles.content}>
                <ul className={styles.list}>
                  <IconContext.Provider value={{ color: "red", size: "25px" }}>
                    <li className={styles.listitem}>
                      <IoIcons.IoMdCheckmark />
                      <span className={styles.listcontent}>
                        No commitments, cancel anytime.
                      </span>
                    </li>
                    <li className={styles.listitem}>
                      <IoIcons.IoMdCheckmark />
                      <span className={styles.listcontent}>
                        Everything on Netflix for one low price.
                      </span>
                    </li>
                    <li className={styles.listitem}>
                      <IoIcons.IoMdCheckmark />
                      <span className={styles.listcontent}>
                        Unlimited viewing on all your devices.
                      </span>
                    </li>
                  </IconContext.Provider>
                </ul>
              </div>
            </div>
            <div className={styles.buttonCard}>
              <Link to="/paymentChoice">
                <button className={styles.nextbtn} type="submit">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SecondStep;
