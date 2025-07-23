import styles from './style.module.scss';

interface TransferBoxProps {}

const TransferBox = ({}: TransferBoxProps) => {
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
    <>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <p>toss</p>
          </div>
          <div className={styles.backButton}>
            <p>←</p>
          </div>
        </div>

        {/* Main Card */}
        <div className={styles.mainCard}>
          <div className={styles.bankName}>
            <p>토스뱅크</p>
          </div>
          <div className={styles.balance}>
            <p>1,234,560원</p>
          </div>
          <div className={styles.actionButtons}>
            <button 
              className={styles.actionButton}
              onClick={() => handleActionButton('송금')}
            >
              <div className={styles.actionButtonText}>
                <p>송금</p>
              </div>
            </button>
            <button 
              className={styles.actionButton}
              onClick={() => handleActionButton('충전')}
            >
              <div className={styles.actionButtonText}>
                <p>충전</p>
              </div>
            </button>
            <button 
              className={styles.actionButton}
              onClick={() => handleActionButton('ATM')}
            >
              <div className={styles.actionButtonText}>
                <p>ATM</p>
              </div>
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <p>입금 계좌</p>
        </div>

        {/* Info Card */}
        <div className={styles.infoCard}>
          <div className={styles.infoCardTitle}>
            <p>입금할 금액</p>
          </div>
          <div className={styles.amount}>
            <p>{amount} 원</p>
          </div>
          <div className={styles.divider} />
          <div className={styles.detailsList}>
            <div className={styles.detailsContainer}>
              {detailItems.map((item, index) => (
                <div key={index} className={styles.detailItem}>
                  <div className={styles.detailLabel}>
                    <p>{item.label}</p>
                  </div>
                  <div className={`${styles.detailValue} ${item.isBlue ? styles.detailValueBlue : ''}`}>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
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
    </>
  );
};

export default TransferBox