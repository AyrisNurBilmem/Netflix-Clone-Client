import React, { useState } from "react";
import { tableContent } from "../../data/tableContent";
import styles from "./table.module.scss";

const Table = () => {
  const [selected, setSelected] = useState("1");
  return (
    <>
      <div className={styles.planGrid}>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioButton}
            type="radio"
            id="1"
            onClick={() => setSelected("1")}
          />
          <span className={styles.radioContent}>Basic</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioButton}
            type="radio"
            id="2"
            onClick={() => setSelected("2")}
          />
          <span className={styles.radioContent}>Standard</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioButton}
            type="radio"
            id="3"
            onClick={() => setSelected("3")}
          />
          <span className={styles.radioContent}>Premium</span>
        </label>
      </div>
      <table className={styles.table}>
        {tableContent &&
          tableContent.map((data, id) => (
            <tr key={id} className={styles.tableRow}>
              <td className={styles.rowElement}>{data.title}</td>
              <td
                className={styles.rowDetail}
                style={
                  selected === "1" ? { color: "red" } : { color: "#737373" }
                }
              >
                {data.basic}
              </td>
              <td
                className={styles.rowDetail}
                style={
                  selected === "2" ? { color: "red" } : { color: "#737373" }
                }
              >
                {data.standard}
              </td>
              <td
                className={styles.rowDetail}
                style={
                  selected === "3" ? { color: "red" } : { color: "#737373" }
                }
              >
                {data.premium}
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default Table;
