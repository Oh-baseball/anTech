import { useState } from 'react';
import styles from './style.module.scss';

const Button = () => {
    const [isRound, setIsRound] = useState(false);
    const [showRocket, setShowRocket] = useState(false);

    const handleClick = () => {
        setIsRound(true)
        
        setTimeout(() => {
            setIsRound(true);
            setShowRocket(true);
        }, 100);
    };

    return (
        <div className={styles.button_container}>
            <button 
                className={`${styles.button} ${isRound?styles.round : ''}`}
                onClick={handleClick}
                >
                {!isRound && <span>토스페이로 9,500원 결제</span>}
            </button>
            {showRocket && (
                <div className={styles.rocket}>
                    <div className={styles.body}>
                        <div className={styles.window}></div>
                        <div className={styles.finleft}></div>
                        <div className={styles.finright}></div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Button;
        // <div className={styles.button_container}>
        //     <button 
        //         className={`${styles.button} ${isRocket? 
        //             <div className={styles.rocket}>
        //                 <div className={styles.body}>
        //                     <div className={styles.window}></div>
        //                     <div className={styles.finleft}></div>
        //                     <div className={styles.finright}></div>
        //                 </div>
        //             </div>
        //              : ''}`}
        //         onClick={handleClick}
        //         >
        //             {!isRocket && <span>토스페이로 9,500원 결제</span>}
        //             {/* <div className={styles.window}></div>
        //             <div className={styles.finleft}></div>
        //             <div className={styles.finright}></div> */}
        //         </button>
        // </div>