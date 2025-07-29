import { useState } from 'react';
import styles from './style.module.scss';
import PaymentRocket from '../PaymentRocket';
import useDarkModeStore from '@/store/useDarkModeStore';

const PaymentButton = () => {

    const darkMode = useDarkModeStore((state) => state.darkMode);

    const [showRocket, setShowRocket] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setShowRocket(true);
        }, 500);
    };

    return (
        <div className={`${styles.button_container} ${darkMode ? styles.dark_mode : ''}`}>
            <button className={styles.button} onClick={handleClick}>
                <span>토스페이로 9,500원 결제</span>
            </button>
            {showRocket && <PaymentRocket/>}
        </div>
    );
}
export default PaymentButton;