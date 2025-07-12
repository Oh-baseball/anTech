import styles from './style.module.scss';
import SmallSquareBox, { SmallSquareBoxItem } from "@/components/SmallSquareBox";
import AccountBox, { AccountBoxProps } from "@/components/AccountBox";
import RecordBox, { RecordBoxItem } from "@/components/RecordBox";
import { useState } from 'react';
import SmallSquareBoxDark from '@/features/SmallSquareBoxDark';
import RecordBoxDark from '@/features/RecordBoxDark';
import AccountBoxDark from '@/features/AccountBoxDark';

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
      <div className={`${styles.wrapper} ${darkMode ? styles.dark_mode : styles.white_mode}`}>
        <div className={styles.home_menu}><p>toss</p></div>
        <div className={styles.account_box_dark}>
          <AccountBoxDark/>
        </div>
        <div className={styles.small_square_box_dark}>
          <SmallSquareBoxDark SmallSquareBoxItems={metrixCodeMenu} />
        </div>
        <div className={styles.transection_menu_dark}>
          <div>
            <p>최근거래</p>
            <a href='#'></a>
          </div>
          <RecordBoxDark recordBoxDarkItems={recordList}/>
        </div>
      </div>
      <div className={styles.home_menu}>
        <p>toss</p>
        <button onClick={conversionMode}><img src='https://picsum.photos/200/300'/></button>
      </div>
      <div className={styles.accountBox}>
        <AccountBox accountInfo={userAccount}/>
      </div>
      <div className={styles.service_menu}>
        <p>빠른 서비스</p>
        <SmallSquareBox SmallSquareBoxItems={metrixCodeMenu} />
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