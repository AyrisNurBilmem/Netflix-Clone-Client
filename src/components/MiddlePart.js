import React from "react";
import tv from "../images/tv.png";
import video from "../images/video-tv-0819.mp4";
import styles from "../styles/landingpage/middlepart.module.scss";

const MiddlePart = () => {
  return (
    <>
      {/* Enjoy Container*/}
      <div className={styles.outside}>
        <div className={styles.generalContainer}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>Enjoy on your TV.</h1>
            <h2 className={styles.subtitle}>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray, and more.
            </h2>
          </div>
          <div className={styles.videoContainer}>
            <div className={styles.animationContainer}>
              <img className={styles.tv} src={tv} alt="tv" />
              <div className={styles.videoDiv}>
                <video className={styles.video} loop={true} autoPlay muted>
                  <source src={video} type="video/mp4"></source>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Mobile Container*/}
      <div className={styles.generalContainer}>
        <div className={styles.videoContainer}></div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>
            Download your shows to watch offline.
          </h1>
          <h2 className={styles.subtitle}>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
