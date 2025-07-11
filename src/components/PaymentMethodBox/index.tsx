import toss_icon from './assets/토스 아이콘.svg'
import after_select from './assets/체크 박스.svg'
import before_select from './assets/선택전 아이콘.svg'
import styles from './style.module.scss';

const PaymentMethodBox = () => {
    return(
        // <div className='payment_method_container'>
        <div className={styles.PaymentMethodBox}>
            <div>
                <img src={toss_icon} alt="토스 아이콘"/>
                <div className='payment_method_info'>
                    <p>토스페이</p>
                    <p>잔액 1,234,560원</p>
                </div>
            </div>
            <div className='check'>
                <div className='selected'>
                    <img src={after_select} alt="선택 후 아이콘"/>
                    <p>선택됨</p>
                </div>
                <div className='unselected'>
                    <img className='unselected' src={before_select} alt="선택 전 아이콘" />
                </div>
            </div>
        </div>
    );
}
export default PaymentMethodBox;