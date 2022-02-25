import React from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import styles from "./giftcard.module.scss";

const GiftCard = () => {
  return (
    <div className={styles.wholepage}>
      <Navbar />
      <div className={styles.middleContainer}>
        <div className={styles.centerContainer}>
          <form className={styles.giftForm}>
            <div className={styles.inputContainer}>
              <div className={styles.header}>
                <span className={styles.stepIndicator}>
                  STEP <strong>3</strong> OF<strong>3</strong>
                </span>
                <h1 className={styles.title}>Enter your gift code</h1>
              </div>
              <div className={styles.codeContainer}></div>
            </div>
            <div className={styles.buttonContainer}></div>
            <div className={styles.termsContainer}></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GiftCard;
