import { useQueryClient } from '@tanstack/react-query';
import PaymentInfoItem from '../PaymentInfoItem';
import styles from './style.module.scss';
import { Order } from '@/types/order';
import { useEffect } from 'react';
import useUserStore from '@/store/useUserStore';
import { usePaymentMethod } from '@/hooks/queries/usePaymentMethod';
import useDarkModeStore from '@/store/useDarkModeStore';

interface PaymentInfoListProps {
  orderId: string | null;
  methodId: string | null;
}

const PaymentInfoList = ({ orderId, methodId }: PaymentInfoListProps) => {
  const queryClient = useQueryClient();
  const orderData = queryClient.getQueryData<Order>(['order', orderId]);
  const userId = useUserStore((state) => state.userId);
  const { paymentMethod, isPending } = usePaymentMethod({ userId, methodId });
  const darkMode = useDarkModeStore((state) => state.darkMode);

  useEffect(() => {
    console.log('paymentMethod', paymentMethod);
  }, [paymentMethod]);

  if (!orderData || isPending) {
    return <div></div>;
  }

  const getAdditionalItemText = () => {
    const itemsLength = orderData.items.length;
    if (itemsLength > 1) {
      return ` 외 ${itemsLength - 1}건`;
    }
    return '';
  };

  const infoList = [
    { label: '결제수단', value: `${paymentMethod?.alias_name || '토스페이'}` },
    { label: '상품명', value: `${orderData.items[0].menu_name}${getAdditionalItemText()}` },
    { label: '주문금액', value: `${orderData.total_amount.toLocaleString()}원` },
    { label: '할인혜택', value: orderData.discount_amount.toLocaleString(), isDiscount: true },
  ];

  return (
    <ul className={`${styles.info_list} ${darkMode ? styles.dark_mode : ''}`}>
      {infoList.map((item, idx) => (
        <PaymentInfoItem
          key={item.label}
          label={item.label}
          value={item.value}
          isDiscount={item.isDiscount}
          style={{ animationDelay: `${idx * 0.12}s` }}
        />
      ))}
    </ul>
  );
};

export default PaymentInfoList;
