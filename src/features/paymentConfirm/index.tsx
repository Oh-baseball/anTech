import Header from '@/components/Header';
import styles from './style.module.scss';
import PaymentAmount from './PaymentAmount';
import PaymentInfoList from './PaymentInfoList';
import ActionButton from '@/components/ActionButton';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { Order } from '@/types/order';
import useDarkModeStore from '@/store/useDarkModeStore';

const PaymentConfirmContainer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const methodId = searchParams.get('methodId');
  const queryClient = useQueryClient();
  const orderData = queryClient.getQueryData<Order>(['order', orderId]);
  const darkMode = useDarkModeStore((state) => state.darkMode);

  if (!orderData) {
    return <></>;
  }

  const handleOnclickPayment = () => {
    navigate(`/auth/pattern?orderId=${orderId}&methodId=${methodId}`, { viewTransition: true });
  };

  return (
    <>
      <div className={`${styles.container}  ${darkMode ? styles.dark_mode : ''}`}>
        <Header prevBtn title="결제하기" />
        <section className={`${styles.confirm_box} ${darkMode ? styles.dark_mode : ''}`}>
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
