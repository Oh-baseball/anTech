import Header from '@/components/Header';
import AccountBox, { AccountBoxProps } from './AccountBox';
import styles from './style.module.scss';
import { useState } from 'react';
import { CreditCard } from 'lucide-react';

interface RemittanceLayoutProps {
  userAccount: AccountBoxProps;
}

interface DetailItem {
  label: string;
  value: string;
  isBlue?: boolean;
}

const RemittanceLayout = ({userAccount}:RemittanceLayoutProps) => {
  const [amount, setAmount] = useState('input');
  const [accountNumber, setAccountNumber] = useState('input');
  const [memo, setMemo] = useState('input');
  const [checkTransfer, setCheckTransfer] = useState(false);

  const handleCancel = () => {
    console.log('취소 버튼 클릭');
  };

  const handletransfer = () => {
    setCheckTransfer(true);

  };

  return (
    <div className={styles.transfer_container}>
      <Header 
        prevBtn={true}
        title="입금"
      />
      <div className={styles.coinBox}>
        <div className={styles.coin1}></div>
        <div className={styles.coin2}></div>
        <div className={styles.coin3}></div>
        <div className={styles.coin4}></div>
        <div className={styles.coin5}></div>
      </div>

      <div className={styles.accountBox}>
        <AccountBox accountInfo={userAccount}/>
      </div>

      <div className={styles.sectionTitle}>
        <p>입금 계좌</p>
      </div>

      {/* Info Card */}
      <div className={`${styles.infoCard} ${checkTransfer ? styles.reduce : ''}`}>
        <div className={styles.infoCardTitle}>
          <p>입금할 금액</p>
        </div>
        <div className={styles.amount}>
          <input type='number' placeholder=''/>
          <p>원</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.detailsList}>
          <div className={styles.detailsContainer}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>
                <p>계좌번호</p>
              </div>
              <div className={styles.detailValue}>
                <input type='text' placeholder=''/>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>
                <p>메 모</p>
              </div>
              <div className={styles.detailValue}>
                <input type='text' placeholder=''/>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>
                <p>입금자명</p>
              </div>
              <div className={styles.detailValue}>
                <p>userName</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>
                <p>수수료</p>
              </div>
              <div className={styles.detailValue}>
                <p>-500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <span className={`${styles.card_icon} ${checkTransfer ? styles.visible : ''}`}><CreditCard size={64}/></span>

      {/* Button Group */}
      <div className={styles.buttonGroup}>
        <button className={styles.cancelButton} onClick={handleCancel}>
          <div className={styles.cancelButtonText}>
            <p>취 소</p>
          </div>
        </button>
        <button className={styles.confirmButton} onClick={handletransfer}>
          <div className={styles.confirmButtonText}>
            <p>입 금</p>
          </div>
        </button>
      </div>
    </div>
  )
};

export default RemittanceLayout