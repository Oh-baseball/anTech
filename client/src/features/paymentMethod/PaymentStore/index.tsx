import styles from './style.module.scss';

const PaymentStore = () => {
    return(
        <div className={styles.payment_info}>
            <div className={styles.store_info}>
                {/* <img src={store_icon} alt="" /> */}
                <img src="https://url.kr/fb9r49" alt="스타벅스 로고" />
                <p>스타벅스 강남점</p>
            </div>
            <div className={styles.payment_amount}>
                <p>총 결제금액</p>
                <p>9,500원</p>
            </div>
        </div>
    );
}
export default PaymentStore;