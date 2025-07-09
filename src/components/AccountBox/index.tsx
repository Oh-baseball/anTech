import styles from './style.module.scss';

interface AccountBoxProps {
  balance: number;
}

const AccountBox = ({balance}: AccountBoxProps) => {
  return (
    <div className={styles.accountBox}>
      <div>토스뱅크</div>
      <div>{balance}원</div>
      <div>
        <button>송금</button>
        <button>충전</button>
        <button>ATM</button>
      </div>
    </div>
  )
};

export default AccountBox