import PaymentInfoItem from '../PaymentInfoItem';
import styles from './style.module.scss';

const infoList = [
  { label: '결제수단', value: '토스뱅크 통장 (***1234)' },
  { label: '상품명', value: '스타벅스 아메리카노 외 1건' },
  { label: '주문금액', value: '9,500원' },
  { label: '할인혜택', value: '-500원', isDiscount: true },
];

const PaymentInfoList = () => (
  <ul className={styles.info_list}>
    {infoList.map((item, idx) => (
      <PaymentInfoItem
        key={item.label}
        label={item.label}
        value={item.value}
        isDiscount={item.isDiscount}
        style={{ animationDelay: `${idx * 0.12}s` }} // 0.12초 간격
      />
    ))}
  </ul>
);

export default PaymentInfoList;
