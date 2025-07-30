import { SmallSquareBoxItem } from "@/features/Home/SmallSquareBox";
import { RecordBoxItem } from "@/features/Home/RecordBox";
import HomeLayout from "@/features/Home";
import { AccountBoxProps } from "@/features/Home/AccountBox";
import useAccountBalance from "@/store/useAccountBalance";
import { Barcode, QrCode, ShoppingCart } from "lucide-react";


const Home = () => {
  const userBalance = useAccountBalance((state) => state.userBalance);
  const setUserBalance = useAccountBalance((state) => state.setUserBalance);

  const accountInfo: AccountBoxProps = {
    title: '토스페이',
    balance: 3782000,
    menu: ['송금', '충전', 'ATM'],
  };

  accountInfo.balance = Number(userBalance);
  setUserBalance(accountInfo.balance.toString());

  const metrixCodeMenu: SmallSquareBoxItem[] = [
    {  
      icon: QrCode,
      title: 'QR결제',
      content: '스캔하고 간편결제',
    },
    {  
      icon: Barcode,
      title: '바코드결제',
      content: '스캔하고 간편결제',
    },
    {  
      icon: ShoppingCart,
      title: '온라인결제',
      content: '웹/앱에서 간편결제',
    }
  ];

  const recordList: RecordBoxItem[] = [
    {
      img: '/src/assets/store.svg',
      title: '스타벅스 강남점',
      time: '2025.07.13 12:13',
      pay: 4800
    },
    {
      img: '/src/assets/store.svg',
      title: '스타벅스 신논현점',
      time: '2025.07.12 11:59',
      pay: 5200
    },
    {
      img: '/src/assets/store2.svg',
      title: '맥도날드 잠실점',
      time: '2025.07.10 13:20',
      pay: 12900
    },
    {
      img: 'https://picsum.photos/200/300',
      title: '스타벅스 강남점',
      time: '12:34',
      pay: 4500
    },
    // {
    //   img: 'https://picsum.photos/200/300',
    //   title: '스타벅스 강남점',
    //   time: '12:34',
    //   pay: 4500
    // }
  ]

  return (
  <>
    <HomeLayout userAccount={accountInfo} metrixCodeMenu={metrixCodeMenu} recordList={recordList}/>
  </>
  )
};

export default Home;
