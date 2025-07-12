import styles from '../paymentConfirm.module.scss';

interface PaymentInfoItemProps {
  label: string;
  value: string;
  isDiscount?: boolean;
}

const PaymentInfoItem = ({ label, value, isDiscount = false }: PaymentInfoItemProps) => (
  <li>
    <span className={styles.infoLabel}>{label}</span>
    <span className={isDiscount ? styles.discount : styles.infoValue}>{value}</span>
  </li>
);

export default PaymentInfoItem;
