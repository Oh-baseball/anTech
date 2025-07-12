import { useState } from 'react';
import styles from './style.module.scss';
import { motion } from "framer-motion";

export interface CartButtonItem {
  amount: number;
}

interface CartButtonProps {
  CartButtonItem?: CartButtonItem; // ?로 옵셔널 처리
}

const dummyData: CartButtonItem = {
  amount: 14000
};

const CartButton = ({ CartButtonItem }: CartButtonProps) => {
  const data = CartButtonItem ?? dummyData;

  const [pressedIdx, setPressedIdx] = useState<string | null>(null);

  return (
    <motion.button 
      className={`${styles.cartButton} ${pressedIdx === 'button' ? styles.pressed : ''}`}
      onTapStart={() => setPressedIdx('button')}
      onTap={() => setPressedIdx(null)}
      onTapCancel={() => setPressedIdx(null)}
    >
      {pressedIdx === 'button' && <div className={styles.overlay} />}
      💳 {data.amount.toLocaleString()}원 결제하기
    </motion.button>
  );
};

export default CartButton;