import React, { useState } from "react";
import useForm from "../../../error/useForm";
import validate from "../../../error/validateFormSignUp";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./secondstep.module.scss";

const SecondStep = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <div>
      <div className={styles.wholepage}>
        <Navbar />
        <div className={styles.middleContainer}>
          <div className={styles.centerContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.regForm}>
                <div className={styles.regHeader}>
                  <div className={styles.header}>
                    <span className={styles.stepCount}>
                      STEP <strong>1</strong> OF <strong>3</strong>
                    </span>
                    <h1 className={styles.title}>
                      Create a password to start your membership
                    </h1>
                  </div>
                </div>
                <div className={styles.regContent}>
                  <p className={styles.customerView}>
                    Just a few more steps and you're done!
                  </p>
                  <p className={styles.customerView}>We hate paperwork, too.</p>

                  <div className={styles.inputContainer}>
                    <input
                      style={
                        errors.email
                          ? { borderColor: "#f70a16" }
                          : { borderColor: "gray" }
                      }
                      className={styles.inputbox}
                      type="email"
                      autoComplete="off"
                      onChange={(handleChange, handleInput)}
                      defaultValue={values.email}
                    />
                    <label className={styles.inputLabel}>
                      <span className={styles.labelContent}>Email</span>
                    </label>
                  </div>
                  {errors.email && (
                    <div className={styles.errorMessage}>{errors.email}</div>
                  )}

                  <div className={styles.inputContainer}>
                    <input
                      style={
                        errors.password
                          ? { borderColor: "#f70a16" }
                          : { borderColor: "gray" }
                      }
                      className={styles.inputbox}
                      type="password"
                      autoComplete="off"
                      onChange={(handleChange, handleInput)}
                      defaultValue={values.password}
                    />
                    <label className={styles.inputLabel}>
                      <span className={styles.labelContent}>
                        Add a password
                      </span>
                    </label>
                  </div>
                  {errors.password && (
                    <div className={styles.errorMessage}>{errors.password}</div>
                  )}
                  <div className={styles.specialOffers}>
                    <input
                      className={styles.specialOffersCheckbox}
                      type="checkbox"
                    />
                    <label className={styles.specialOffersLabel}>
                      Please do not email me Netflix special offers.
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.buttonCard}>
                <button className={styles.nextbtn} type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SecondStep;
