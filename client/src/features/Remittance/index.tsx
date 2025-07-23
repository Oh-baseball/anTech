import Header from '@/components/Header';
import AccountBox, { AccountBoxProps } from './AccountBox';
import styles from './style.module.scss';
import { useState } from 'react';

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

  const detailItems: DetailItem[] = [
    { label: '계좌번호', value: accountNumber },
    { label: '메       모', value: memo },
    { label: '입금자명', value: '김성진' },
    { label: '수  수  료', value: '-500원', isBlue: true }
  ];

  const handleCancel = () => {
    console.log('취소 버튼 클릭');
  };

  const handleDeposit = () => {
    console.log('입금 버튼 클릭');
  };

  const handleActionButton = (action: string) => {
    console.log(`${action} 버튼 클릭`);
  };

  return (
    <div className={styles.transfer_container}>
      <div className={styles.header}>
        <Header 
          prevBtn={true}
          title="입금"
        />
      </div>
      <div className={styles.accountBox}>
        <AccountBox accountInfo={userAccount}/>
      </div>

      <div className={styles.sectionTitle}>
        <p>입금 계좌</p>
      </div>

      {/* Info Card */}
      <div className={styles.infoCard}>
        <div className={styles.infoCardTitle}>
          <p>입금할 금액</p>
        </div>
        <div className={styles.amount}>
          {/* <input>원</input> */}
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

            {/* {detailItems.map((item, index) => (
              <div key={index} className={styles.detailItem}>
                <div className={styles.detailLabel}>
                  <p>{item.label}</p>
                </div>
                <div className={`${styles.detailValue} ${item.isBlue ? styles.detailValueBlue : ''}`}>
                  <p>{item.value}</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      {/* Button Group */}
      <div className={styles.buttonGroup}>
        <button className={styles.cancelButton} onClick={handleCancel}>
          <div className={styles.cancelButtonText}>
            <p>취 소</p>
          </div>
        </button>
        <button className={styles.confirmButton} onClick={handleDeposit}>
          <div className={styles.confirmButtonText}>
            <p>입 금</p>
          </div>
        </button>
      </div>
    </div>
  )
};

export default RemittanceLayout