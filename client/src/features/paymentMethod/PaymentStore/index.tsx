'use client';

import { useEffect, useState } from 'react';
import axios from "axios";
import styles from './style.module.scss';

interface PaymentProvider {
  id: string;
  name: string;
  // API 응답 구조에 맞춰 추가
}

const PaymentStore = () => {
  const [data, setData] = useState<PaymentProvider[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const res = await axios.get<PaymentProvider[]>(
          `${import.meta.env.VITE_BASE_URL}payment-methods/providers`
        );
      
        setData(res.data);
        console.log('API 응답:', res.data);
        
      } catch (error) {
        const errorMessage = axios.isAxiosError(error) 
          ? `API 에러: ${error.message}` 
          : '알 수 없는 에러가 발생했습니다';
        
        setError(errorMessage);
        console.error('API 호출 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.payment_info}>
        <div>데이터를 불러오는 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.payment_info}>
        <div className={styles.error}>
          <p>데이터를 불러올 수 없습니다</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.payment_info}>
      <div className={styles.store_info}>
        <img src="https://url.kr/fb9r49" alt="스타벅스 로고" />
        <p>스타벅스 강남점</p>
      </div>
      <div className={styles.payment_amount}>
        <p>총 결제금액</p>
        <p>9,500원</p>
      </div>
      
      {/* 데이터 사용 예시 */}
      {data && data.length > 0 && (
        <div className={styles.payment_methods}>
          <h3>사용 가능한 결제 수단:</h3>
          {data.map((provider) => (
            <div key={provider.id} className={styles.provider}>
              {provider.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentStore;