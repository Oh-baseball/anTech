import toss_icon from '@/assets/tossicon.svg'
import after_select from '@/assets/selection.svg'
import before_select from '@/assets/unselection.svg'

import styles from './style.module.scss';

type PaymentMethodBoxProps = {
    category: string;
    selectedId: number | null;
    // setSelectedId: (id: number | null) => void;
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

const PaymentMethodBox = ({category, selectedId, setSelectedId} : PaymentMethodBoxProps) => {

    const paymentMethods = [
        {id: 1, category: 'easy_payment', name: '토스페이', balance: '1,234,560원'},
        {id: 2, category: 'easy_payment', name: '카카오페이', balance: '1,560원'},
        {id: 3, category: 'easy_payment', name: '네이버페이', balance: '999,000원'},
        {id: 4, category: 'card_payment', name: '신한카드', balance: '999,000원'},
        {id: 5, category: 'account_payment', name: '국민은행', balance: '999,000원'},
        {id: 6, category: 'others_payment', name: '포인트·적립금', balance: '12,450P'},
    ];

    const filtered = paymentMethods.filter((method) => method.category === category);

    const handleClick = (id: number) => {
        setSelectedId(prev => (prev === id ? null : id));
    };

    return(
        <div style={{height:'200px', overflow:'auto'}}>
            {filtered.map((method) => (     
                <div 
                    key={method.id}
                    className={`
                        ${styles.payment_method_container}
                        ${selectedId === method.id ? styles.selected:''}
                    `} 
                    onClick={() => handleClick(method.id)}
                >
                    <div>
                        <img src={toss_icon} alt="토스 아이콘"/>
                        <div className={styles.payment_method_info}>
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