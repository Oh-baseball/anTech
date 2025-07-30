import { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';

export interface CartButtonItem {
  amount: number;
}

interface CartButtonProps {
  CartButtonItem?: CartButtonItem;
  onClick?: () => void;
}

const dummyData: CartButtonItem = {
  amount: 14000,
};

const CartButton = ({ CartButtonItem, onClick }: CartButtonProps) => {
  const data = CartButtonItem ?? dummyData;
  const [pressedIdx, setPressedIdx] = useState<string | null>(null);

  return (
    <motion.button
      className={`${styles.cartButton} ${pressedIdx === 'button' ? styles.pressed : ''}`}
      onTapStart={() => setPressedIdx('button')}
      onTap={() => setPressedIdx(null)}
      onTapCancel={() => setPressedIdx(null)}
      onClick={onClick}
    >
      {pressedIdx === 'button' && <div className={styles.overlay} />}
      💳 {data.amount.toLocaleString()}원 결제하기
    </motion.button>
  );
};

export default CartButton;
