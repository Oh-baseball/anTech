import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

export interface AccountBoxProps {
  title: string;
  balance: number;
  menu: string[];
}

type UserAccount = {
  accountInfo: AccountBoxProps;
};

const AccountBox = ({ accountInfo }: UserAccount) => {
  const { title, balance, menu } = accountInfo;
  const [displayBalance, setDisplayBalance] = useState(balance);
  const prevBalanceRef = useRef(balance);

  useEffect(() => {
    if (prevBalanceRef.current !== balance) {
      animateSlot(prevBalanceRef.current, balance);
      prevBalanceRef.current = balance;
    }
  }, [balance]);

  const animateSlot = (from: number, to: number) => {
    const diff = to - from;
    const steps = 50;
    const stepValue = diff / steps;
    let currentStep = 0;
    let current = from;

    const interval = setInterval(() => {
      currentStep += 1;
      current += stepValue;

      if (currentStep >= steps) {
        setDisplayBalance(to);
        clearInterval(interval);
      } else {
        setDisplayBalance(Math.round(current));
      }
    }, 30);
  };

  const formattedBalance = displayBalance.toLocaleString();

  return (
    <div className={styles.accountBox}>
      <p>{title}</p>
      <p>{formattedBalance}원</p>
      <div>
        {menu.map((item, idx) => (
          <button key={idx}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default AccountBox;
