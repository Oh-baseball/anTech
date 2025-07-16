import { useState } from 'react';
import styles from './style.module.scss';

const Button = () => {
    const [isRounded, setIsRounded] = useState(false);

    const handleClick = () => {
        setIsRounded(true)
    }

    return (
        <div className={styles.button_container}>
            <button 
                className={`${styles.button} ${isRounded? styles.rounded : ''}`}
                onClick={handleClick}
            >
                {!isRounded && <span>토스페이로 9,500원 결제</span>}
            </button>
        </div>
    )
}
export default Button;