import { useState } from 'react';
import styles from './style.module.scss';
import box_icon from '@/assets/package.svg';

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
            {showRocket && (
                <div className={styles.rocket}>
                    <div className={styles.body}>
                        <div className={styles.window}>
                            <img src={box_icon} alt="박스아이콘" />
                        </div>
                        <div className={styles.finfront}></div>
                        <div className={styles.finleft}></div>
                        <div className={styles.finright}></div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Button;