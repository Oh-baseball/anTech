import { useState } from 'react';
import styles from './style.module.scss';
import PaymentRocket from '../PaymentRocket';
import useDarkModeStore from '@/store/useDarkModeStore';
import { useNavigate } from 'react-router-dom';

export interface PaymentButtonItem {
  amount: number;
}

interface PaymentButtonProps {
  PaymentButtonItem?: PaymentButtonItem;
  buttonOnClick?: () => void;
}

const dummyData: PaymentButtonItem = {
  amount: 14000,
};

const PaymentButton = ({ PaymentButtonItem }: PaymentButtonProps) => {
  console.log('PaymentButton에서 onClick:');

  const navigate = useNavigate();

  const data = PaymentButtonItem ?? dummyData;

  const darkMode = useDarkModeStore((state) => state.darkMode);
  const [showRocket, setShowRocket] = useState(false);

  // const handleClick = () => {
  //     setTimeout(() => {
  //         setShowRocket(true);
  //     }, 500);
  // };
  const handleClick = () => {
    setShowRocket(true);
    // setTimeout(() => {
    //     if(onClick) onClick();
    // }, 2000);
  };

  const handleRocketEnd = () => {
    console.log('로켓 애니메이션 끝!');
    // if(onClick) onClick();
    // if (buttonOnClick) {
    //   console.log('onClick 실행함!'); // 디버깅용
    //   buttonOnClick(); // <-- 이게 안 불리는 이유는 onClick이 undefined일 가능성이 큼
    // } else {
    //   console.log('onClick 없음!');
    // }
    navigate('/payment/confirm');
  };

  return (
    <div className={`${styles.button_container} ${darkMode ? styles.dark_mode : ''}`}>
      <button className={styles.button} onClick={handleClick}>
        <span>토스페이로 {data.amount.toLocaleString()}원 결제</span>
      </button>
      {showRocket && <PaymentRocket onAnimationEnd={handleRocketEnd} />}
    </div>
  );
};
export default PaymentButton;
