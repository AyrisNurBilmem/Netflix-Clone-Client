import { Link } from "react-router-dom";
import netflix from "../../images/logo.png";
import DropDown from "../dropdown/DropDown";
import Searchbar from "../searchbar/Searchbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={netflix} alt="netflix-logo" />
        <div className={styles.buttons}>
          <DropDown />
          <Link to="/signin" className={styles.signinLink}>
            <button className={styles.signinButton} type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.topTitle}>
        <h1 className={styles.mainTitle}>
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className={styles.secondaryTitle}>
          Watch anywhere. Cancel anytime.
        </h2>
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
