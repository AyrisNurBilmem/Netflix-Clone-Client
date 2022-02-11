import React from "react";
import styles from "./faq.module.scss";
import { faqData } from "../../data/faqData";
import FaqDetails from "./FaqDetails";
import Searchbar from "../searchbar/Searchbar";

const Faq = () => {
  return (
    <div className={styles.generalDiv}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <div>
        {faqData &&
          faqData.map((data, id) => (
            <FaqDetails
              key={id}
              question={data.question}
              answer={data.answer}
            />
          ))}
      </div>
      <div className={styles.searchbarDiv}>
        <Searchbar />
      </div>
    </div>
  );
};

export default Faq;
