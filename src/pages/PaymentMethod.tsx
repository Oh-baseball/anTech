import Button from "@/features/paymentMethod/Button";
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
    <div className='payment_method' style={{overflow: 'auto'}}>
      <PaymentStore />

      {sections.map((section)=>(
        <div key={section.title}>
          <PaymentTitle title={section.title} />
          {section.categories.map((category) => (
            <PaymentMethodBox
              key={category} 
              category={category}
              selectedId={selectedId}
              setSelectedId={setSelectedId} />)
          )
}
        </div>
      ))}

      <Button />
    </div>
  )
};

export default PaymentMethod;

// {sections.map((section)=>(
//         <div key={section.title}>
//           <PaymentTitle title={section.title} />
//           {section.categories.map((category) => (
//             <PaymentMethodBox 
//               key={category}  
//               category={category}
//               selectedId={selectedId}
//               setSelectedId={setSelectedId} />
//           ))}
//         </div>
//       ))}