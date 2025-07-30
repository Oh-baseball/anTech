import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import imageMoon from "@/assets/moon.png"
import imageSun from "@/assets/sun.png"
import useDarkModeStore from "@/store/useDarkModeStore";

const FlipButton: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const darkMode = useDarkModeStore((state) => state.darkMode);
  
  useEffect(() => {
    setFlipped(darkMode);
  }, [])

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <button className={styles.cardContainer} onClick={handleFlip}>
      <div className={`${styles.card} ${flipped ? styles.isFlipped : ""}`}>
        <img
          className={`${styles.cardFace} ${styles.cardFront}`}
          src={imageMoon} alt="light"
        />
        <img
          className={`${styles.cardFace} ${styles.cardBack}`}
          src={imageSun} alt="dark"
        />
      </div>
    </button>
  );
};

export default FlipButton;
