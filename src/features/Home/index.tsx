import styles from './style.module.scss';
import { useState } from 'react';

import SmallSquareBox, { SmallSquareBoxItem } from "@/features/Home/SmallSquareBox";
import AccountBox, { AccountBoxProps } from "@/features/Home/AccountBox";
import RecordBox, { RecordBoxItem } from "@/features/Home/RecordBox";

import DarkSmallSquareBox from '@/features/Home/DarkSmallSquareBox';
import DarkAccountBox from '@/features/Home/DarkAccountBox';
import DarkRecordBox from '@/features/Home/DarkRecordBox';
import FlipButton from './FlipButton';

interface HomeLayoutProps {
  userAccount: AccountBoxProps;
  metrixCodeMenu: SmallSquareBoxItem[];
  recordList: RecordBoxItem[];
}

const HomeLayout = ({userAccount, metrixCodeMenu, recordList}: HomeLayoutProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const conversionMode = () => {
    setDarkMode(darkMode ? false : true);
  }
  
  return (
    <div className={styles.home_container}>
      <div className={`${styles.wrapper} ${darkMode ? styles.dark_mode : ""}`}>
        <div className={styles.home_menu}><p>ANPay</p></div>
        <div className={styles.account_box_dark}>
          <DarkAccountBox/>
        </div>
        <div className={styles.small_square_box_dark}>
          <DarkSmallSquareBox SmallSquareBoxItems={metrixCodeMenu} />
        </div>
        <div className={styles.transection_menu_dark}>
          <div>
            <p>최근거래</p>
            <a href='#'></a>
          </div>
            <DarkRecordBox recordBoxDarkItems={recordList}/>
        </div>
      </div>
      <div className={styles.home_menu}>
        <p>ANPay</p>
        <button onClick={conversionMode}>
          <FlipButton/>
        </button>
      </div>
      <div className={styles.accountBox}>
        <AccountBox accountInfo={userAccount}/>
      </div>
      <div className={styles.service_menu}>
        <p>빠른 서비스</p>
        <div className={styles.service_menu_button}>
          <SmallSquareBox SmallSquareBoxItems={metrixCodeMenu} />
        </div>
      </div>
      <div className={styles.transection_menu}>
        <div>
          <p>최근거래</p>
          <a href='#'>전체</a>
        </div>
          <RecordBox RecordBoxItmes={recordList}/>
      </div>
    </div>
  )
};

export default HomeLayout