import React from "react";
import styles from "../middlepart/middlepart.module.scss";

const MiddlePart = ({
  title,
  description,
  img,
  video,
  videoClass,
  reverse,
}) => {
  return (
    <>
      <div className={styles.outside}>
        <div
          className={styles.generalContainer}
          style={
            reverse
              ? { "flex-direction": "row-reverse" }
              : { "flex-direction": "row" }
          }
        >
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{description}</h2>
          </div>
          <div className={styles.videoContainer}>
            <div className={styles.animationContainer}>
              <img
                className={styles.tv}
                src={require(`../../images/${img}.png`)}
                alt="tv"
              />
              {img !== "mobile" ? (
                ""
              ) : (
                <div className={styles.downloading}>
                  <div className={styles.downloadingImage}>
                    <img
                      className={styles.stImage}
                      src={require("../../images/boxshot.png")}
                      alt="st"
                    />
                  </div>
                  <div className={styles.downloadingText}>
                    <div className={styles.text0}>Stranger Things</div>
                    <div className={styles.text1}>Downloading...</div>
                  </div>
                </div>
              )}

              <div
                className={
                  videoClass === "videoDiv" ? styles.videoDiv : styles.videoDiv2
                }
              >
                <video className={styles.video} loop={true} autoPlay muted>
                  {video && (
                    <source
                      src={require(`../../images/${video}.mp4`)}
                      type="video/mp4"
                    ></source>
                  )}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
