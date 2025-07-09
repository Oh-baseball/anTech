import styles from './style.module.scss';

interface AccountBoxProps {
  title: string;
  balance: number;
  menu: string[];
}

const AccountBox = ({title, balance, menu}: AccountBoxProps) => {
  const formmetedBalance = balance.toLocaleString();

  return (
    <div className={styles.accountBox}>
      <p>{title}</p>
      <p>{formmetedBalance}원</p>
      <div>
        {menu.map((item, idx) => (
          <button key={idx}>{item}</button>
        ))}
      </div>
    </div>
  )
};

export default AccountBox