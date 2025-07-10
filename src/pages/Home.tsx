import { SmallSquareBoxItem } from "@/components/SmallSquareBox";
import { RecordBoxItem } from "@/components/RecordBox";
import HomeLayout from "@/layouts/Home";
import { AccountBoxProps } from "@/components/AccountBox";


const Home = () => {
  const userAccount: AccountBoxProps = {
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
    <HomeLayout userAccount={userAccount} metrixCodeMenu={metrixCodeMenu} recordList={recordList}/>
  </>
  )
};

export default Home;
