import useDarkModeStore from '@/store/useDarkModeStore';
import styles from './style.module.scss';

const PaymentAmount = ({ amount }: { amount: number }) => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <div className={`${styles.amount_section} ${darkMode ? styles.dark_mode : ''}`}>
      <span className={styles.label}>결제할 금액</span>
      <span className={styles.amount}>{amount.toLocaleString()}원</span>
    </div>
  );
};

export default PaymentAmount;
