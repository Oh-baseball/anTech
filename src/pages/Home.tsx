import SmallSquareBox, { SmallSquareBoxItem } from "@/components/SmallSquareBox";
import AccountBox from "@/components/AccountBox";
import RecordBox, { RecordBoxItem } from "@/components/RecordBox";


const Home = () => {
  const accountTitle: string = '토스페이'
  const userBalance: number = 1234560;
  const accountMenu: string[] = ['송금', '충전', 'ATM']

  const metrixMenu: SmallSquareBoxItem[] = [
    {  
      img: 'https://picsum.photos/200/300',
      title: 'QR결제',
      content: '스캔하고 간편결제',
    },
    {  
      img: 'https://picsum.photos/200/300',
      title: '바코드결제',
      content: '스캔하고 간편결제',
    },
    {  
      img: 'https://picsum.photos/200/300',
      title: '온라인결제',
      content: '웹/앱에서 간편결제',
    }
  ];

  const recordList: RecordBoxItem[] = [
    {
      img: 'https://picsum.photos/200/300',
      title: '스타벅스 강남점',
      time: '12:34',
      pay: 4500
    },
    {
      img: 'https://picsum.photos/200/300',
      title: '스타벅스 강남점',
      time: '12:34',
      pay: 4500
    },
    {
      img: 'https://picsum.photos/200/300',
      title: '스타벅스 강남점',
      time: '12:34',
      pay: 4500
    },
    {
      img: 'https://picsum.photos/200/300',
      title: '스타벅스 강남점',
      time: '12:34',
      pay: 4500
    }
  ]

  return (
  <div className="home_container" style={{ backgroundColor: 'white' }}>
    <div><p>toss</p><button>이미지</button></div>
    <AccountBox title={accountTitle} balance={userBalance} menu={accountMenu}/>
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

export default Home;
