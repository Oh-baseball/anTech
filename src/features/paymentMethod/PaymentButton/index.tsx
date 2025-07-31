import { useState } from 'react';
import styles from './style.module.scss';
import PaymentRocket from '../PaymentRocket';
import useDarkModeStore from '@/store/useDarkModeStore';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

// export interface PaymentButtonItem {
//   final_amount: number;
// }

interface PaymentButtonProps {
  // PaymentButtonItem?: PaymentButtonItem;
  buttonOnClick?: () => void;
  handleRocketEnd: () => void;
  disabled?: boolean;
}

// const dummyData: PaymentButtonItem = {
//   final_amount: 14000,
// };

interface OrderResponseData {
  order_id: string;
  store: string;
  final_amount: number;
}

// const PaymentButton = ({ PaymentButtonItem, handleRocketEnd, disabled }: PaymentButtonProps) => {
const PaymentButton = ({ handleRocketEnd, disabled }: PaymentButtonProps) => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  // const orderData = queryClient.getQueryData(['order', orderId]);
  const orderData = queryClient.getQueryData<OrderResponseData>(['order', orderId]);

  const darkMode = useDarkModeStore((state) => state.darkMode);
  const [showRocket, setShowRocket] = useState(false);

  const handleClick = () => {
    setShowRocket(true);
  };

  return (
    <div className={`${styles.button_container} ${darkMode ? styles.dark_mode : ''}`}>
      <button className={styles.button} onClick={handleClick} disabled={disabled}>
        <span>
          {' '}
          {orderData ? `💳 ${orderData.final_amount.toLocaleString()}원 결제하기` : '결제 금액 정보 없음'}
        </span>
      </button>
      {showRocket && <PaymentRocket onAnimationEnd={handleRocketEnd} />}
    </div>
  );
};
export default PaymentButton;
