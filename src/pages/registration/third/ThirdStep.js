import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Table from "../../../components/table/Table";
import styles from "./thirdstep.module.scss";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons/lib";

const ThirdStep = () => {
  const footer = {
    backgroundColor: "#f3f3f3",
  };
  return (
    <>
      <div className={styles.wholePage}>
        <Navbar />
        <div className={styles.middlePart}>
          <div className={styles.centerPart}>
            <div className={styles.planForm}>
              <div>
                <div className={styles.stepHeaderContainer}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepIndicator}>
                      STEP <strong>3</strong> OF <strong>3</strong>
                    </span>
                    <h1 className={styles.title}>
                      Choose the plan that’s right for you
                    </h1>
                  </div>
                </div>
                <div className={styles.changeAnytime}>
                  <ul className={styles.listGroup}>
                    <IconContext.Provider
                      value={{ color: "red", size: "25px" }}
                    >
                      <li className={styles.listItem}>
                        <IoIcons.IoMdCheckmark />
                        <span className={styles.listSpan}>
                          Watch all you want. Ad-free.
                        </span>
                      </li>
                      <li className={styles.listItem}>
                        <IoIcons.IoMdCheckmark />
                        <span className={styles.listSpan}>
                          Recommendations just for you.
                        </span>
                      </li>
                      <li className={styles.listItem}>
                        <IoIcons.IoMdCheckmark />
                        <span className={styles.listSpan}>
                          Change or cancel your plan anytime.
                        </span>
                      </li>
                    </IconContext.Provider>
                  </ul>
                </div>
                <Table />
              </div>
              <div className={styles.bottomTable}>
                <p className={styles.bottomTableContent}>
                  HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                  subject to your internet service and device capabilities. Not
                  all content is available in all resolutions. See our{" "}
                  <a href="https://help.netflix.com/legal/termsofuse">
                    Terms of Use
                  </a>{" "}
                  for more details.
                </p>
                <p className={styles.bottomTableContent}>
                  Only people who live with you may use your account. Watch on 4
                  different devices at the same time with Premium, 2 with
                  Standard and 1 with Basic.
                </p>
              </div>
            </div>

            <div className={styles.buttonCard}>
              <Link to="/paymentChoice/payment">
                <button className={styles.nextbtn} type="submit">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer style={footer} />
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
