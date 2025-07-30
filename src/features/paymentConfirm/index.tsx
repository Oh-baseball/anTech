import Header from '@/components/Header';
import styles from './style.module.scss';
import PaymentAmount from './PaymentAmount';
import PaymentInfoList from './PaymentInfoList';
import CancelButton from '@/components/CancelButton';
import ActionButton from '@/components/ActionButton';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { Order } from '@/types/order';
import useUserStore from '@/store/useUserStore';
import { usePaymentMethod } from '@/hooks/queries/usePaymentMethod';

const PaymentConfirmContainer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const methodId = searchParams.get('methodId');
  const queryClient = useQueryClient();
  const orderData = queryClient.getQueryData<Order>(['order', orderId]);
  const userId = useUserStore((state) => state.userId);
  const { paymentMethod, isPending } = usePaymentMethod({ userId, methodId });

  // useEffect(() => {
  //   console.log('userId', userId);
  // }, [userId]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetchPaymentMethod({ userId, methodId });
  //     console.log('데이터', response.data);
  //   })();
  // }, []);

  if (!orderData || isPending) {
    return <></>;
  }

  const handleOnclickPayment = () => {
    navigate(`/auth?orderId=${orderId}&methodId=${methodId}`);
  };

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
          onClick={handleOnclickPayment}
        />
      </div>
    </>
  );
};

export default PaymentConfirmContainer;
