import styles from '../paymentConfirm.module.scss';

const PaymentAmount = ({ amount }: { amount: number }) => (
  <div className={styles.amountSection}>
    <span className={styles.label}>결제할 금액</span>
    <span className={styles.amount}>{amount.toLocaleString()}원</span>
  </div>
);

export default PaymentAmount;
