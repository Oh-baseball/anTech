import PaymentInfoItem from '../PaymentInfoItem';
import styles from './style.module.scss';

const PaymentInfoList = () => (
  <ul className={styles.info_list}>
    <PaymentInfoItem label="결제수단" value="토스뱅크 통장 (***1234)" />
    <PaymentInfoItem label="상품명" value="스타벅스 아메리카노 외 1건" />
    <PaymentInfoItem label="주문금액" value="9,500원" />
    <PaymentInfoItem label="할인혜택" value="-500원" isDiscount />
  </ul>
);

export default PaymentInfoList;
