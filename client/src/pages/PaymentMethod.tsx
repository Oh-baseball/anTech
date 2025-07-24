import Header from "@/components/Header";
import PaymentButton from "@/features/paymentMethod/PaymentButton";
import PaymentMethodBox from "@/features/paymentMethod/PaymentMethodBox";
import PaymentStore from "@/features/paymentMethod/PaymentStore";
import PaymentTitle from "@/features/paymentMethod/PaymentTitle";
import { useState } from "react";

const PaymentMethod = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const sections = [
    {title: "간편결제", categories: ['easy_payment']},
    {title: "카드 · 계좌", categories: ['card_payment', 'account_payment']},
    {title: "기타", categories: ['others_payment']}
  ];

  return (
    <div style={{padding: '0 20px'}}>
      <Header 
        prevBtn={true}
        title="결제수단 선택"
        right={<button style={{ fontSize: '20px' }}>X</button>}
      />
      <div className='payment_method'>
      
        <PaymentStore />
        
        <div style={{ height: '500px',overflow : 'auto', scrollbarWidth:'none', msOverflowStyle:'none'}}>
        {sections.map((section) => (
          <div key={section.title}>
            <PaymentTitle title={section.title} />
            {section.categories.length === 1 ? (
              <PaymentMethodBox
              category={section.categories[0]}
              selectedId={selectedId}
              setSelectedId={setSelectedId} 
              />
            ) : (
              <PaymentMethodBox
              category="card_or_account"
              selectedId={selectedId}
              setSelectedId={setSelectedId} 
              />
            )}
          </div>
        ))}
        </div>

        <PaymentButton />
      </div>
    </div>
  )
};

export default PaymentMethod;