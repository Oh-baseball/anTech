import styles from './style.module.scss';
import { CartItem } from '@/types/store';

interface CartTotalBoxProps {
  items: CartItem[];
}

const CartTotalBox = ({ items }: CartTotalBoxProps) => {
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className={styles.cartTotalBox}>
      <div className={styles.headerRow}>
        <span className={styles.headerTitle}>{totalCount}건 주문금액</span>
      </div>
      <div className={styles.labelRow}>
        <span className={styles.label}>총 상품 금액</span>
        <span className={styles.totalPrice}>{totalPrice.toLocaleString()}원</span>
      </div>
      {items.map((item, idx) => (
        <div key={idx} className={styles.itemRow}>
          <span>{item.name}</span>
          <span className={styles.cartCount}>x {item.count}</span>
          <span className={styles.cartPrice}>{(item.price * item.count).toLocaleString()}원</span>
        </div>
      ))}
    </div>
  );
};

export default CartTotalBox;
