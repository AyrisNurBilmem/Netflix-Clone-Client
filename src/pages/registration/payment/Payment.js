import React from "react";
import lock from "../../../images/Lock.png";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { paymentData } from "../../../data/paymentData";
import PaymentButton from "../../../components/paymentButton/PaymentButton";
import * as MdIcons from "react-icons/md";
import styles from "./payment.module.scss";

const Payment = () => {
  const footer = {
    backgroundColor: "#f3f3f3",
  };
  return (
    <>
      <div className={styles.wholepage}>
        <Navbar />
        <div className={styles.middleContainer}>
          <div className={styles.paymentCard}>
            <div className={styles.paymentHeader}>
              <div className={styles.logoContainer}>
                <img className={styles.lock} src={lock} alt="lock" />
              </div>
              <div className={styles.headerContainer}>
                <div className={styles.header}>
                  <span className={styles.stepIndicator}>
                    STEP <strong>3</strong> OF<strong>3</strong>
                  </span>
                  <h1 className={styles.title}>Set up your payment</h1>
                </div>
              </div>
              <div className={styles.contentContainer}>
                <p className={styles.content}>
                  Your membership starts as soon as you set up payment.
                </p>
                <div className={styles.subContent}>
                  <div className={styles.details}>No commitments.</div>
                  <div className={styles.details}>Cancel online anytime.</div>
                </div>
              </div>
            </div>
            <div className={styles.secure}>
              <MdIcons.MdLock className={styles.icon} />
              <div className={styles.secureP}>Secure Server</div>
            </div>
            <div className={styles.selectionBtn}>
              {paymentData &&
                paymentData.map((data) => (
                  <PaymentButton
                    link={data.link}
                    content={data.content}
                    logo={data.logo}
                    size={data.size}
                  />
                ))}
            </div>
          </div>
        </div>
        <Footer style={footer} />
      </div>
    </>
  );
};

export default Payment;
