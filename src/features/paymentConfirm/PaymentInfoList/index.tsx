import { useQueryClient } from '@tanstack/react-query';
import PaymentInfoItem from '../PaymentInfoItem';
import styles from './style.module.scss';
import { Order } from '@/types/order';
import { useEffect } from 'react';

interface PaymentInfoListProps {
  orderId: string | null;
  methodId: string | null;
}

const PaymentInfoList = ({ orderId, methodId }: PaymentInfoListProps) => {
  const queryClient = useQueryClient();
  const orderData = queryClient.getQueryData<Order>(['order', orderId]);

  useEffect(() => {
    console.log('methodId', methodId);
  }, [methodId]);

  if (!orderData) {
    return <></>;
  }

  const getAdditionalItemText = () => {
    const itemsLength = orderData.items.length;
    if (itemsLength > 1) {
      return ` 외 ${itemsLength - 1}건`;
    }
    return '';
  };

  const infoList = [
    { label: '결제수단', value: '토스뱅크 통장 (***1234)' },
    { label: '상품명', value: `${orderData.items[0].menu_name}${getAdditionalItemText()}` },
    { label: '주문금액', value: orderData.total_amount.toLocaleString() },
    { label: '할인혜택', value: orderData.discount_amount.toLocaleString(), isDiscount: true },
  ];

  <ul className={styles.info_list}>
    {infoList.map((item, idx) => (
      <PaymentInfoItem
        key={item.label}
        label={item.label}
        value={item.value}
        isDiscount={item.isDiscount}
        style={{ animationDelay: `${idx * 0.12}s` }}
      />
    ))}
  </ul>;
};

export default PaymentInfoList;
