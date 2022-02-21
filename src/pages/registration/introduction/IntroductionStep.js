import { Link } from "react-router-dom";
import devices from "../../../images/devices.png";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./introduction.module.scss";
import Footer from "../../../components/footer/Footer";

const IntroductionStep = () => {
  return (
    <>
      <div className={styles.wholepage}>
        <Navbar />
        <div className={styles.middlecontainer}>
          <div className={styles.centerContainer}>
            <div className={styles.regCard}>
              <div className={styles.imgContainer}>
                <img className={styles.deviceImg} src={devices} alt="devices" />
              </div>
              <div className={styles.headerContainer}>
                <div className={styles.header}>
                  <span className={styles.stepCount}>
                    STEP <strong>1</strong> OF <strong>3</strong>
                  </span>
                  <h1 className={styles.title}>
                    Finish setting up your account
                  </h1>
                </div>
              </div>
              <div className={styles.content}>
                Netflix is personalized for you. Create a password to watch on
                any device at any time.
              </div>
            </div>
            <div className={styles.buttonCard}>
              <Link to="/signup/regform">
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

export default IntroductionStep;
