'use client';

import { useEffect, useState } from 'react';
import axios from "axios";
import styles from './style.module.scss';
import storeImg from "@/assets/store.svg";
import useDarkModeStore from '@/store/useDarkModeStore';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

interface PaymentProvider {
  order_id: string;
  name: string;
  store: string;
  total_amount: number;
  final_amount: number;
  // API 응답 구조에 맞춰 추가
}

interface OrderResponseData{
  order_id: string;
  store: string;
  final_amount: number;
}
// const [orderData, setOrderData] = useState<OrderResponse | null>(null);

const PaymentStore = () => {
  
  const darkMode = useDarkModeStore((state) => state.darkMode);
  
  const [data, setData] = useState<PaymentProvider[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  // const orderData = queryClient.getQueryData(['order', orderId]);
  const orderData = queryClient.getQueryData<OrderResponseData>(['order', orderId]);

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const res = await axios.get<PaymentProvider[]>(
            `${import.meta.env.VITE_BASE_URL}orders/${orderId}`
        );
        const resData= await res.data

        console.log(res.status)
        setData(resData);
        console.log('API 응답:', resData);
        console.log('orderData:',orderData);

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
    
    <div className={`${styles.payment_info} ${darkMode ? styles.dark_mode : ''}`}>
      <div className={styles.store_info}>
        <img src={storeImg} alt="스타벅스 로고" />  
        {/* <p>{orderData ? `${orderData.store.toLocaleString()}`:'가게 정보 없음'}</p> */}
        <p>스타벅스 강남점</p>
      </div>
      <div className={`${styles.payment_amount} ${darkMode ? styles.payment_amount_dark_mode : ''}`}>
        <p>총 결제금액</p>
        <p>{orderData ? `${orderData.final_amount.toLocaleString()}원` : '금액 정보 없음'}</p>
      </div>
      
      {/* 데이터 사용 예시 */}
      {data && data.length > 0 && (
        <div className={styles.payment_methods}>
          <h3>사용 가능한 결제 수단:</h3>
          {data.map((provider) => (
            <div key={provider.order_id} className={styles.provider}>
              {provider.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentStore;