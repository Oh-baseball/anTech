import Header from '@/components/Header';
import styles from './style.module.scss';
import PaymentAmount from './PaymentAmount';
import PaymentInfoList from './PaymentInfoList';
import CancelButton from '@/components/CancelButton';
import ActionButton from '@/components/ActionButton';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { Order } from '@/types/order';
import { useEffect } from 'react';
import fetchPaymentMethod from '@/apis/payment-methods/fetchPaymentMethod';
import useUserStore from '@/store/useUserStore';

const PaymentConfirmContainer = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const methodId = searchParams.get('methodId');
  const queryClient = useQueryClient();
  const orderData = queryClient.getQueryData<Order>(['order', orderId]);
  const userId = useUserStore((state) => state.userId);

  useEffect(() => {
    console.log('userId', userId);
  }, [userId]);

  useEffect(() => {
    (async () => {
      const response = await fetchPaymentMethod({ userId, methodId });
      console.log('데이터', response.data);
    })();
  }, []);

  if (!orderData) {
    return <></>;
  }

  return (
    <>
      <Header prevBtn title="결제하기" right={<CancelButton />} />
      <div className={styles.container}>
        <section className={styles.confirm_box}>
          <PaymentAmount amount={orderData.total_amount} />
          <PaymentInfoList orderId={orderId} methodId={methodId} />
        </section>
        <ActionButton
          label={`${orderData.total_amount.toLocaleString()}원 결제하기`}
          onClick={() => null}
        />
      </div>
    </>
  );
};

export default PaymentConfirmContainer;
