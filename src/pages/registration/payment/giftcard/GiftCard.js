import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import InputBox from "../../../../components/input/InputBox";
import StepButton from "../../../../components/stepbutton/StepButton";
import styles from "./giftcard.module.scss";

const GiftCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
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
              <div className={styles.codeContainer}>
                <InputBox />
                <div className={styles.plan}>
                  <div className={styles.planType}>
                    <div className={styles.price}>
                      <span className={styles.priceSpan}>26.99 TL/month</span>
                    </div>
                    <div className={styles.planName}>Basic Plan</div>
                  </div>
                  <Link to="/paymentChoice">
                    <button className={styles.changeBtn}>Change</button>
                  </Link>
                </div>
              </div>
            </div>

            <StepButton
              link={"/"}
              content={"Redeem Gift Code"}
              width={"440px"}
            />

            <div className={styles.termsContainer}>
              <div className={styles.terms}>
                <p className={styles.content}>
                  <span className={styles.contentSpan}>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                  </span>
                  <button
                    className={styles.learnMoreBtn}
                    onClick={handleClick}
                    style={
                      isClicked ? { display: "none" } : { display: "block" }
                    }
                  >
                    Learn More
                  </button>
                </p>
                {isClicked && (
                  <div className={styles.learnMore}>
                    <span className={styles.learnMoreContent}>
                      The information collected by Google reCAPTCHA is subject
                      to the Google{" "}
                      <a href="https://policies.google.com/privacy">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="https://policies.google.com/terms">
                        Terms of Service,
                      </a>{" "}
                      and is used for providing, maintaining, and improving the
                      reCAPTCHA service and for general security purposes (it is
                      not used for personalized advertising by Google).
                    </span>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GiftCard;
