import Header from '@/components/Header';
import AccountBox, { AccountBoxProps } from './AccountBox';
import styles from './style.module.scss';
import { useState, useRef, ChangeEvent } from 'react';
import { CreditCard } from 'lucide-react';
import Coin from '@/components/Coin';
import useDarkModeStore from '@/store/useDarkModeStore';
interface RemittanceLayoutProps {
  userAccount: AccountBoxProps;
}

const RemittanceLayout = ({userAccount}:RemittanceLayoutProps) => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const [checkTransfer, setCheckTransfer] = useState(false);
  const [checkCoin, setCheckCoin] = useState(false);
  const coinsRefs = useRef<(HTMLDivElement)[]>([]);
  const coin1 = useRef<HTMLDivElement>(null);

  const [amount, setAmount] = useState('');
  const [displayAccount, setDisplayAccount] = useState(userAccount);

  const onlyNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value.replace(/[^0-9]/g, '').replace(/^0+/, ''));
  }
  
  const handleCancel = () => {
    console.log('취소 버튼 클릭');
  };

  const handletransfer = () => {
    setCheckTransfer(true);
    setCheckCoin(true);
    
    const { title, balance, menu } = displayAccount;
    const newBalance = balance - Number(amount);
    setDisplayAccount({
      title,
      balance: newBalance,
      menu,
    });

    if (coinsRefs.current) {
      coinsRefs.current.forEach((coinEl) => {
        if (!coinEl) return;
        const coin = coinEl.firstElementChild;
        
        if (coin instanceof HTMLElement) {
          coin.style.transform = 'rotateY(500deg)';
          coin.style.transition = 'transform 3.8s linear';
        }
      })
    }

    if (coin1.current && coin1.current.firstElementChild instanceof HTMLElement) {
      const el = coin1.current.firstElementChild;
      el.style.transform = 'rotateY(720deg)';
      el.style.transition = 'transform 4s linear';
    }


  };

  return (
    <div className={`${styles.transfer_container} ${darkMode ? styles.dark_mode : ''}`}>
      <Header 
        prevBtn={true}
        title="입금"
      />

      <div className={`${styles.coin_container} ${checkCoin ? styles.coin_check : ''}`}>
        {Array.from({ length: 5}).map((_, i) => (
          <div key={`coinNev${i}`} className={`${styles['coin' + i + 'Outside']}`}>
            <div
              key={`coinNev${i}`}
              className={`${styles['coin' + i + 'Inside']}`}
              ref={(el) => {
                if (el) {
                  coinsRefs.current[i] = el;
                }
              }}
              >
              <Coin scale={0.2}/>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.accountBox}>
        <AccountBox accountInfo={displayAccount}/>
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
          <input type='text' value={amount} placeholder=''
            onChange={onlyNumber}
          />
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