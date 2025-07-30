import { CSSProperties } from 'react';
import styles from './style.module.scss';

interface PaymentInfoItemProps {
  label: string;
  value: string;
  isDiscount?: boolean;
  style?: CSSProperties;
}

const PaymentInfoItem = ({ label, value, isDiscount = false, style }: PaymentInfoItemProps) => (
  <li className={styles.info_item} style={style}>
    <span className={styles.info_label}>{label}</span>
    <span className={isDiscount ? styles.discount : styles.info_value}>{value}</span>
  </li>
);

export default PaymentInfoItem;
