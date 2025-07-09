import AccountBox from "@/components/AccountBox";


const Home = () => {
  const userBalance: number= 123450
  return (
  <div className="home_container">
    <div><p>toss</p><button>이미지</button></div>
    <AccountBox balance={userBalance}/>
    <div>
      <div>빠른 서비스</div>
      <div>
        <button>
          <div>이미지</div>
          <p>QR결제</p>
          <p>스캔하고 간편결제</p>
        </button>
        <button>
          <div>이미지</div>
          <p>바코드결제</p>
          <p>매장에서 바코드 제시</p>
        </button>
        <button>
          <div>이미지</div>
          <p>온라인결제</p>
          <p>웹/앱에서 간편결제</p>
        </button>
      </div>
    </div>
    <div>
      <div>
        <div>최근거래</div>
        <div>전체</div>
      </div>
      <div>
        <div>이미지</div>
        <div>
          <div>스타벅스 강남점</div>
          <div>12:34</div>
        </div>
        <div>-4,500원</div>
      </div>
    </div>
  </div>
  )
};

export default Home;
