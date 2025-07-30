import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import PaymentRocket from '../PaymentRocket';
import useDarkModeStore from '@/store/useDarkModeStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export interface PaymentButtonItem {
  amount: number;
}

interface PaymentButtonProps {
  PaymentButtonItem?: PaymentButtonItem;
  buttonOnClick?: () => void;
  orderId?: string;
  selectedMethod?: string;
}

const dummyData: PaymentButtonItem = {
  amount: 14000,
};

const PaymentButton = ({
  PaymentButtonItem,
  buttonOnClick,
  orderId,
  selectedMethod,
}: PaymentButtonProps) => {
  const navigate = useNavigate();

  const data = PaymentButtonItem ?? dummyData;

  const darkMode = useDarkModeStore((state) => state.darkMode);
  const [showRocket, setShowRocket] = useState(false);

  const handleClick = () => {
    if (buttonOnClick) {
      if (!selectedMethod) {
        buttonOnClick();
        return;
      }
      setShowRocket(true);
      buttonOnClick();
    }
  };

  const handleRocketEnd = () => {
    if (buttonOnClick) {
      buttonOnClick();
    }
  };

  return (
    <div className={`${styles.button_container} ${darkMode ? styles.dark_mode : ''}`}>
      <button 
        className={`${styles.button} ${!selectedMethod ? styles.disabled : ''}`} 
        onClick={handleClick}
      >
        <span>토스페이로 {data.amount.toLocaleString()}원 결제</span>
      </button>
      {showRocket && <PaymentRocket onAnimationEnd={handleRocketEnd} />}
    </div>
  );
};
export default PaymentButton;
