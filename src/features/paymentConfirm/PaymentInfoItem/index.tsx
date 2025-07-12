import styles from './style.module.scss';

interface PaymentInfoItemProps {
  label: string;
  value: string;
  isDiscount?: boolean;
}

const PaymentInfoItem = ({ label, value, isDiscount = false }: PaymentInfoItemProps) => (
  <li className={styles.info_item}>
    <span className={styles.info_label}>{label}</span>
    <span className={isDiscount ? styles.discount : styles.info_value}>{value}</span>
  </li>
);

export default PaymentInfoItem;
