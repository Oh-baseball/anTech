import PaymentMethodContainer from '@/features/paymentMethod/PaymentMethodContainer';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PaymentMethod = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleNext = () => {
    if (!selectedMethod) {
      alert('결제 수단을 선택해주세요.');
      return;
    }

    const orderData = queryClient.getQueryData(['order', orderId]);

    if (!orderData) {
      alert('주문 정보를 찾을 수 없습니다.');
      return;
    }

    navigate(`/payment/confirm?orderId=${orderId}&methodId=${selectedMethod}`);
  };

  return (
    <>
      <PaymentMethodContainer />
    </>
  );
};

export default PaymentMethod;
