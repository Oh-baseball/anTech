import toss_icon from '@/assets/tossicon.svg'
import after_select from '@/assets/selection.svg'
import before_select from '@/assets/unselection.svg'

import styles from './style.module.scss';
// import PaymentMethodBox from "@/features/paymentMethod/Components/PaymentMethodBox";

const PaymentMethodBox = () => {
    return(
        <div className={styles.payment_method_container}>
            <div>
                <img src={toss_icon} alt="토스 아이콘"/>
                <div className={styles.payment_method_info}>
                    <p>토스페이</p>
                    <p>잔액 1,234,560원</p>
                </div>
            </div>
            <div className={styles.check}>
                <div className={styles.selected}>
                    <img src={after_select} alt="선택 후 아이콘"/>
                    <p>선택됨</p>
                </div>
                <div className='unselected' style={{display:'none'}}>
                    <img className='unselected' src={before_select} alt="선택 전 아이콘" />
                </div>
            </div>
        </div>
    );
}
export default PaymentMethodBox;