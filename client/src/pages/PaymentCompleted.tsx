import createUser from '@/apis/users/createUser';
import PaymentCompletedContainer from '@/features/paymentCompleted/paymentCompleted';
import { useEffect } from 'react';

const PaymentCompleted = () => {
  useEffect(() => {
    (async () => {
      try {
        const userApiRes = await createUser({
          password: 'password123',
          name: '홍길동',
          pw_number: '123456',
          pw_pattern: '1234',
        });
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
