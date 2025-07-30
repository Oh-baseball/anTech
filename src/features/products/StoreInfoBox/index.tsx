import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import storeImg from "@/assets/store.svg";
import { Store } from '@/types/store';
import fetchStoreById from '@/apis/stores/fetchStoreById';

interface StoreInfoBoxItem {
  img: string;
  name: string;
  address: string;
}

const StoreInfoBox = () => {
  const [storeData, setStoreData] = useState<StoreInfoBoxItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // API에서 스토어 데이터 로드
  useEffect(() => {
    const loadStoreData = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetchStoreById(1); // store_id를 1로 고정
        const store: Store = response.data;

        const apiStoreData: StoreInfoBoxItem = {
          img: store.logo_url || storeImg, // 로고가 없으면 기본 이미지 사용
          name: store.store_name,
          address: store.address,
        };

        setStoreData(apiStoreData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '스토어 정보를 불러오는 중 오류가 발생했습니다.';
        setError(errorMessage);
        console.error('Store API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStoreData();
  }, []);

  // 로딩 상태 처리
  if (loading) {
    return (
      <div className={styles.storeInfoBox}>
        <div className={styles.left_items}>
          <p>스토어 정보를 불러오는 중...</p>
        </div>
        <div className={styles.right_items}>
          <img src={storeImg} alt="로딩 중"/>
        </div>
      </div>
    );
  }

  // 에러 상태 처리
  if (error) {
    return (
      <div className={styles.storeInfoBox}>
        <div className={styles.left_items}>
          <p>스토어 정보를 불러올 수 없습니다.</p>
          <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>
        </div>
        <div className={styles.right_items}>
          <img src={storeImg} alt="에러"/>
        </div>
      </div>
    );
  }

  // 데이터가 없는 경우
  if (!storeData) {
    return (
      <div className={styles.storeInfoBox}>
        <div className={styles.left_items}>
          <p>스토어 정보가 없습니다.</p>
        </div>
        <div className={styles.right_items}>
          <img src={storeImg} alt="데이터 없음"/>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.storeInfoBox}>
      <div className={styles.left_items}>
        <p>{storeData.name}</p>
        <p>{storeData.address}</p>
      </div>
      <div className={styles.right_items}>
        <img src={storeData.img} alt="매장 이미지"/>
      </div>
    </div>
  );
};

export default StoreInfoBox;