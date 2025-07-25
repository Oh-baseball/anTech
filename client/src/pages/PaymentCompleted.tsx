import fetchUser from '@/apis/users/fetchUser';
import PaymentCompletedContainer from '@/features/paymentCompleted/paymentCompleted';
import { useEffect } from 'react';

const PaymentCompleted = () => {
  useEffect(() => {
    (async () => {
      try {
        const userApiRes = await fetchUser();
        if (userApiRes.success) {
          console.log('사용자 데이터:', userApiRes.data);
        } else {
          console.warn('API 호출은 성공했으나 success가 false입니다:', userApiRes.message);
        }
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
      }
    })();
  }, []);
  return <PaymentCompletedContainer />;
};

export default PaymentCompleted;
