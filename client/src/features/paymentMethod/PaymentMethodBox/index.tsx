import logo_toss from '@/assets/logo_toss.svg';
// import logo_kakao from '@/assets/logo_kakao.png';
import logo_naver from '@/assets/logo_naver.svg';
import logo_shinhan from '@/assets/logo_shinhan.png';
import logo_shinhyup from '@/assets/logo_shinhyup.png';

import after_select from '@/assets/selection.svg';
import before_select from '@/assets/unselection.svg';
import styles from './style.module.scss';
import useDarkModeStore from '@/store/useDarkModeStore';

type PaymentMethodBoxProps = {
    category: string;
    selectedId: number | null;
    // setSelectedId: (id: number | null) => void;
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

const PaymentMethodBox = ({category, selectedId, setSelectedId} : PaymentMethodBoxProps) => {
    
    const darkMode = useDarkModeStore((state) => state.darkMode);

    const paymentMethods = [
        {id: 1, category: 'easy_payment', name: '토스페이', balance: '1,234,560원', img: logo_toss},
        // {id: 2, category: 'easy_payment', name: '카카오페이', balance: '1,560원', img: logo_kakao},
        {id: 3, category: 'easy_payment', name: '네이버페이', balance: '999,000원', img: logo_naver},
        {id: 4, category: 'card_payment', name: '신한카드', balance: '999,000원', img: logo_shinhan},
        {id: 5, category: 'account_payment', name: '신협은행', balance: '999,000원', img: logo_shinhyup},
        {id: 6, category: 'card_payment', name: '신한카드', balance: '4,000원', img: logo_shinhan},
        {id: 7, category: 'others_payment', name: '포인트·적립금', balance: '12,450P'},
    ];

    const filtered = category === 'card_or_account' ? paymentMethods.filter((method) => 
    method.category === 'card_payment' || method.category === 'account_payment')
    : paymentMethods.filter((method) => method.category === category);

    const handleClick = (id: number) => {
        setSelectedId(prev => (prev === id ? null : id));
    };

    return(
        <div>
            {filtered.map((method) => (     
                <div 
                    key={method.id}
                    className={`
                        ${styles.payment_method_container}
                        ${selectedId === method.id ? styles.selected:''}
                        ${darkMode ? styles.dark_mode : ''}
                    `} 
                    onClick={() => handleClick(method.id)}
                >
                    <div>
                        <img src={method.img} alt="토스 아이콘"/>
                        <div className={`${styles.payment_method_info} ${darkMode ? styles.payment_method_info_dark_mode : ''}`}>
                            <p>{method.name}</p>
                            <p>잔액 {method.balance}</p>
                        </div>
                    </div>
                    <div className={styles.check}>
                        {selectedId == method.id ? (
                            <div className={styles.selected}>
                                <img src={after_select} alt="선택 후 아이콘"/>
                                <p>선택됨</p>
                            </div>
                            ) : (
                            <div className={styles.unselected}>
                                <img src={before_select} alt="선택 전 아이콘" />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default PaymentMethodBox;