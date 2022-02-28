import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import InputBox from "../../../../components/input/InputBox";
import StepButton from "../../../../components/stepbutton/StepButton";
import { inputFieldData } from "../../../../data/inputFieldData";
import styles from "./creditcard.module.scss";

const CreditCard = () => {
  const inputField = () => {
    return (
      <div className={styles.codeContainer}>
        {inputFieldData &&
          inputFieldData.map((data) => <InputBox label={data.label} />)}

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
    );
  };
  const termsAndConditions = () => {
    return (
      <>
        <div className={styles.termsContainer}>
          Your payments will be processed internationally. Additional bank fees
          may apply.
        </div>
        <div className={styles.termsContainer}>
          <span className={styles.contentSpan}>
            By checking the checkbox below, you agree to our{" "}
            <a href="https://help.netflix.com/legal/termsofuse">
              Terms of Use{" "}
            </a>
            ,{" "}
            <a href="https://help.netflix.com/legal/privacy">
              Privacy Statement
            </a>
            , and that you are over 18. Netflix will automatically continue your
            membership and charge the membership fee (currently 26.99TL/month)
            to your payment method until you cancel. You may cancel at any time
            to avoid future charges.
          </span>
          <div className={styles.checkboxDiv}>
            <input type="checkbox" />
            <span className={styles.agreeTerms}>I agree</span>
          </div>
        </div>
      </>
    );
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
                <h1 className={styles.title}>
                  Set up your credit or debit card
                </h1>
                <img
                  className={styles.creditcards}
                  alt="cards"
                  src={require(`../../../../images/cards.png`)}
                ></img>
              </div>
              {inputField()}
              {termsAndConditions()}
            </div>

            <StepButton
              link={"/"}
              content={"Start Membership"}
              width={"440px"}
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreditCard;
