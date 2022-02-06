import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import { Link } from "react-router-dom";
import styles from "./signin.module.scss";
import netflix from "../../images/logo.png";
import Footer from "../../components/footer/Footer";

const Signin = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  const [isOpen, setIsOpen] = useState(false);
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
                      required
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
                      required
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
                      <label className={styles.rememberMeLabel}>
                        Remember Me
                      </label>
                    </div>
                    <Link className={styles.needHelp} to="signin">
                      Need Help?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.signinOther}>
              <form
                className={styles.facebookForm}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className={styles.facebookDiv}>
                  <button className={styles.facebookButton}>
                    <div className={styles.fbLogin}>
                      <img
                        className={styles.fbImg}
                        src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                        alt="fb"
                      />
                      <span className={styles.facebookButtonText}>
                        Login with Facebook
                      </span>
                    </div>
                  </button>
                </div>
                <div className={styles.signupNow}>
                  <p className={styles.signupPara}>
                    New to Netflix?
                    <Link to="/" className={styles.signupLink}>
                      Sign Up Now
                    </Link>
                    .
                  </p>
                </div>
                <div className={styles.termsOfUse}>
                  <p className={styles.termsOfUsePara}>
                    <span className={styles.termsOfUseText}>
                      This page is protected by Google reCAPTCHA to ensure
                      you're not a bot.
                    </span>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className={styles.termsOfUseButton}
                      type="submit"
                    >
                      Learn more.
                    </button>
                  </p>
                  {isOpen === true && (
                    <div className={styles.learnMore}>
                      <span>
                        The information collected by Google reCAPTCHA is subject
                        to the Google
                        <a
                          className={styles.termsOfUseLink}
                          href="https://policies.google.com/privacy"
                        >
                          Privacy Policy
                        </a>
                        and
                        <a
                          className={styles.termsOfUseLink}
                          href="https://policies.google.com/terms"
                        >
                          Terms of Service
                        </a>
                        , and is used for providing, maintaining, and improving
                        the reCAPTCHA service and for general security purposes
                        (it is not used for personalized advertising by Google).
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signin;
