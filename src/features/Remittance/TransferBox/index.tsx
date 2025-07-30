import styles from './style.module.scss';

export interface AccountBoxProps {
    title: string;
    balance: number;
    menu: string[];
}

type UserAccount = {
  accountInfo: AccountBoxProps;
}

const AccountBox = ({accountInfo}: UserAccount) => {
  const { title, balance, menu } = accountInfo;
  const formmetedBalance = balance.toLocaleString();

  return (
    <div className={styles.accountBox}>
      <div className={styles.stopMixBlend}>
        <p>{title}</p>
        <p>{formmetedBalance}원</p>
        <div>
          {menu.map((item, idx) => (
            <button key={idx}>{item}</button>
          ))}
        </div>
      </div>
    </div>
  )
};

export default AccountBox