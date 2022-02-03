import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import { Link } from "react-router-dom";
import styles from "./signin.module.scss";
import netflix from "../../images/logo.png";

const Signin = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <>
      <div className={styles.generalDiv}>
        <div className={styles.logoDiv}>
          <Link to="/">
            <img className={styles.logo} src={netflix} alt="netflix-logo" />
          </Link>
        </div>
        <div className={styles.signinBody}>
          <div className={styles.signinCard}>
            <div className={styles.signinForm}>
              <div className={styles.signinMain}>
                <h1 className={styles.signinTitle}>Sign In</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <input
                      className={styles.inputbox}
                      name="email"
                      autoComplete="off"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <label className={styles.inputLabel}>
                      <span className={styles.labelContent}>
                        Email or phone number
                      </span>
                    </label>
                  </div>
                  {errors.email && (
                    <div className={styles.errorMessage}>{errors.email}</div>
                  )}

                  <div className={styles.inputContainer}>
                    <input
                      className={styles.inputbox}
                      type="password"
                      name="password"
                      autoComplete="off"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <label className={styles.inputLabel}>
                      <span className={styles.labelContent}>Password</span>
                    </label>
                  </div>
                  {errors.password && (
                    <div className={styles.errorMessage}>{errors.password}</div>
                  )}
                  <button className={styles.signinButton} type="submit">
                    Sign In
                  </button>
                  <div className={styles.formHelp}>
                    <div className={styles.rememberMe}>
                      <input className={styles.checkbox} type="checkbox" />
                      <label className={styles.remeberMeLabel}>
                        Remember Me
                      </label>
                    </div>
                    <Link className={styles.needHelp} to="signin">
                      Need Help?
                    </Link>
                  </div>
                </form>
              </div>
              <div className={styles.signinOther}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
