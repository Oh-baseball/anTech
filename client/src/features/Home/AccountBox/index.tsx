import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { title, balance, menu } = accountInfo;
  const formmetedBalance = balance.toLocaleString();

  const Transfer = () => (
    navigate('/Remittance', { viewTransition: true})
  );

  return (
    <div className={styles.accountBox}>
      <div className={styles.stopMixBlend}>
        <p>{title}</p>
        <p>{formmetedBalance}원</p>
        <div>
          {menu.map((item, idx) => (
            <button key={idx} onClick={Transfer}>{item}</button>
          ))}
        </div>
      </div>
    </div>
  )
};

export default AccountBox