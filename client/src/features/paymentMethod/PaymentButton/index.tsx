import { useState } from 'react';
import styles from './style.module.scss';
import PaymentRocket from '../PaymentRocket';

const Button = () => {
    const [showRocket, setShowRocket] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setShowRocket(true);
        }, 500);
    };

    return (
        <div className={styles.button_container}>
            <button className={styles.button} onClick={handleClick}>
                <span>토스페이로 9,500원 결제</span>
            </button>
            {showRocket && <PaymentRocket/>}
        </div>
    );
}
export default Button;