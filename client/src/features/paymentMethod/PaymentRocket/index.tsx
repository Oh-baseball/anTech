import styles from './style.module.scss';
import box_icon from '@/assets/package.svg';

const PaymentRocket = () => {
    return(
        <div className={styles.rocket}>
            <div className={styles.rocket_container}>
                <div className={styles.rocket_body}>
                    <div className={styles.rocket_window}>
                        <img src={box_icon} alt="박스아이콘" />
                    </div>
                    <div className={styles.rocket_footer}></div>
                </div>
                <div className={styles.rocket_finfront}></div>
                <div className={styles.rocket_finleft}></div>
                <div className={styles.rocket_finright}></div>
                <div className={styles.flame}></div>
            </div>
            <ul className={styles.exhaust_fumes}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>                    
                <li></li>
            </ul>
        </div>
    )
}

export default PaymentRocket;