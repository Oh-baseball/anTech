import { useState } from 'react';
import styles from './style.module.scss';
import { motion } from "framer-motion";

export interface StoreButtonItem {
  name: string;
}

interface StoreButtonProps {
  StoreButtonItem?: StoreButtonItem; // ?로 옵셔널 처리
}

const dummyData: StoreButtonItem = {
  name:"장바구니 담기"
};

const StoreButton = ({ StoreButtonItem }: StoreButtonProps) => {
  const data = StoreButtonItem ?? dummyData;

  const [pressedIdx, setPressedIdx] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const buttonType = data.name === "바로 결제하기" ? styles.pay: styles.cart;

  const handleCartClick = () => {
    if (data.name === "장바구니 담기") {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }
  };

  return (
    <motion.button 
      className={`${styles.storeButton} ${buttonType} ${pressedIdx === 'button' ? styles.pressed : ''} ${isAnimating ? styles.animating : ''}`}
      onTapStart={() => setPressedIdx('button')}
      onTap={() => {
        setPressedIdx(null);
        handleCartClick();
      }}
      onTapCancel={() => setPressedIdx(null)}
    >
      {pressedIdx === 'button' && <div className={styles.overlay} />}
      <span className={styles.buttonText}>{data.name}</span>
      {data.name === "장바구니 담기" && (
        <div className={styles.cartAnimation}>
          <div className={styles.cartIcon}>🛒</div>
          <div className={styles.checkIcon}>✅</div>
        </div>
      )}
    </motion.button>
  );
};

export default StoreButton;
