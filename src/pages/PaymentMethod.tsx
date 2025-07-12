import PaymentMethodBox from "@/features/paymentMethod/PaymentMethodBox";

const PaymentMethod = () => {
  return <div className='payment_method'>
            <div className='payment_info'>
                <div className='store_info'>
                    {/* <img src={store_icon} alt="" /> */}
                    {/* <img src="https://url.kr/fb9r49" alt="스타벅스 로고" /> */}
                    <span>스타벅스 강남점</span>
                </div>
                <div className='payment_amount'>
                    <p>총 결제금액</p>
                    <p style={{color:'#FAFCFF', fontSize:'20px', fontWeight:700}}>9,500원</p>
                </div>
            </div>
            
            <h3>간편결제</h3>
            <PaymentMethodBox />

            <h3>카드.계좌</h3>
            <PaymentMethodBox />
            <PaymentMethodBox />
            
            <h3>기타</h3>
            <PaymentMethodBox />
            
            {/* <Button /> */}
        </div>
};

export default PaymentMethod;
