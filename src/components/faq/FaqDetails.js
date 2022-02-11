import React, { useState, useEffect, useRef } from "react";
import styles from "./faq.module.scss";

const FaqDetails = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!listRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    });
  });
  return (
    <div>
      <ul ref={listRef} className={styles.faqUL}>
        <li className={styles.faqList}>
          <button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className={styles.faqButton}
          >
            {question}
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className={isOpen === true ? styles.svgOpen : styles.svgClosed}
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
          {isOpen && (
            <div className={styles.answerDiv}>
              <span className={styles.answer}>{answer}</span>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FaqDetails;
