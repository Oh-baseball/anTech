import styles from './style.module.scss';
import SmallSquareBox, { SmallSquareBoxItem } from "@/components/SmallSquareBox";
import AccountBox, { AccountBoxProps } from "@/components/AccountBox";
import RecordBox, { RecordBoxItem } from "@/components/RecordBox";

interface HomeLayoutProps {
  userAccount: AccountBoxProps;
  metrixMenu: SmallSquareBoxItem[];
  recordList: RecordBoxItem[];
}

const HomeLayout = ({userAccount, metrixMenu, recordList}: HomeLayoutProps) => {

  return (
    <div className={styles.home_container}>
      <div><p>toss</p><button>이미지</button></div>
      <AccountBox accountInfo={userAccount}/>
      <div>
        <div>빠른 서비스</div>
        <SmallSquareBox SmallSquareBoxItems={metrixMenu} />
      </div>
      <div>
        <div>
          <div>최근거래</div>
          <div>전체</div>
        </div>
        <RecordBox RecordBoxItmes={recordList}/>
      </div>
    </div>
  )
};

export default HomeLayout