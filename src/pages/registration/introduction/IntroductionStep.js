import devices from "../../../images/devices.png";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./introduction.module.scss";
import Footer from "../../../components/footer/Footer";
import StepButton from "../../../components/stepbutton/StepButton";

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
            <StepButton link={"/signup/regform"} content={" Next"} />
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
