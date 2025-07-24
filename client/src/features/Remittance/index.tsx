import Header from '@/components/Header';
import AccountBox, { AccountBoxProps } from './AccountBox';
import styles from './style.module.scss';
import { useState, useRef } from 'react';
import { CreditCard } from 'lucide-react';
import Coin from '@/components/Coin';

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
  const [checkCoin, setCheckCoin] = useState(false);
  const coin1 = useRef<HTMLDivElement>(null);

  const handleCancel = () => {
    console.log('취소 버튼 클릭');
  };

  const handletransfer = () => {
    setCheckTransfer(true);
    setCheckCoin(true);
    if (coin1.current) {
      coin1.current.style.transform = "rotate(30deg)";
    }
  };

  return (
    <div className={styles.transfer_container}>
      <Header 
        prevBtn={true}
        title="입금"
      />

      <div className={`${styles.coin_container} ${checkCoin ? styles.coin_check : ''}`}>
        {/* {Array.from({ length: 5}).map((_, i) => (
          <div
            key={`coinNev${i}`}
            className={`${styles['coin' + i + 'Outside']}`}
            ref={}
          ></div>
        ))} */}
        <div className={styles.coin1Outside}>
          <div className={styles.coin1Inside} ref={coin1}>
            <Coin scale={0.2}/>
          </div>
        </div>
        <div className={styles.coin2Outside}>
          <div className={styles.coin2Inside}>
            <Coin scale={0.2}/>
          </div>
        </div>
        <div className={styles.coin3Outside}>
          <div className={styles.coin3Inside}>
            <Coin scale={0.2}/>
          </div>
        </div>
        <div className={styles.coin4Outside}>
          <div className={styles.coin4Inside}>
            <Coin scale={0.2}/>
          </div>
        </div>
        <div className={styles.coin5Outside}>
          <div className={styles.coin5Inside}>
            <Coin scale={0.2}/>
          </div>
        </div>
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