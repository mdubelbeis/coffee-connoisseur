import React from "react";
import styles from "../styles/Banner.module.css";

interface BannerProps {
  btnText: string;
  handleOnClick: () => void;
}
const Banner: React.FC<BannerProps> = ({ btnText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Lorem ipsum dolor sit amet.</p>
      <button className={styles.button} onClick={handleOnClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Banner;
