import { SmallSquareBoxItem } from "@/features/Home/SmallSquareBox";
import { RecordBoxItem } from "@/features/Home/RecordBox";
import HomeLayout from "@/features/Home";
import { AccountBoxProps } from "@/features/Home/AccountBox";


const Home = () => {
  const accountInfo: AccountBoxProps = {
    title: '토스페이',
    balance: 1234560,
    menu: ['송금', '충전', 'ATM'],
  };

  const metrixCodeMenu: SmallSquareBoxItem[] = [
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
  <>
    <HomeLayout userAccount={accountInfo} metrixCodeMenu={metrixCodeMenu} recordList={recordList}/>
  </>
  )
};

export default Home;
