import { useState } from 'react';
import styles from './style.module.scss';
import PaymentRocket from '../PaymentRocket';
import useDarkModeStore from '@/store/useDarkModeStore';


export interface PaymentButtonItem{
    amount: number;
}

interface PaymentButtonProps{
    PaymentButtonItem?: PaymentButtonItem;
    onClick?:() => void;
}

const dummyData: PaymentButtonItem = {
    amount: 14000
}

const PaymentButton = ({PaymentButtonItem, onClick} : PaymentButtonProps) => {
    console.log('PaymentButton에서 onClick:', onClick);

    const data = PaymentButtonItem ?? dummyData;

    const darkMode = useDarkModeStore((state) => state.darkMode);
    const [showRocket, setShowRocket] = useState(false);

    const handleClick = () => {
        setShowRocket(true);
    };

    const handleRocketEnd = () => {
         console.log('로켓 애니메이션 끝!');
   
    };

    return (
        <div className={`${styles.button_container} ${darkMode ? styles.dark_mode : ''}`}>
            <button className={styles.button} onClick={handleClick}>
                <span>토스페이로 {data.amount.toLocaleString()}원 결제</span>
            </button>
            {showRocket && <PaymentRocket onAnimationEnd={handleRocketEnd}/>}
        </div>
    );
}
export default PaymentButton;