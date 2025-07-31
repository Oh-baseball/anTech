import logo_toss from '@/assets/logo_toss.svg';
// import logo_kakao from '@/assets/logo_kakao.png'; // 카카오페이 로고가 있다면 주석 해제
import logo_naver from '@/assets/logo_naver.svg';
import logo_shinhan from '@/assets/logo_shinhan.png';
import logo_shinhyup from '@/assets/logo_shinhyup.png';
import after_select from '@/assets/selection.svg';
import before_select from '@/assets/unselection.svg';
import styles from './style.module.scss';
import useDarkModeStore from '@/store/useDarkModeStore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useUserStore from '@/store/useUserStore';

// API의 provider_id와 프론트엔드의 로고, 카테고리를 매핑하는 헬퍼 객체
const providerDetails: Record<string, { category: string; img: string }> = {
  TOSS_PAY: { category: 'easy_payment', img: logo_toss },
  NAVER_PAY: { category: 'easy_payment', img: logo_naver },
  SHINHAN_CARD: { category: 'card_payment', img: logo_shinhan },
  KOOKMIN_BANK: { category: 'account_payment', img: logo_shinhyup },
  // 필요한 다른 결제 수단들을 여기에 추가하세요.
  DEFAULT: { category: 'others_payment', img: '' }, // 기본값
};

// API 응답 데이터 타입
interface PaymentMethodProvider {
  method_id: number;
  provider_id: string;
  masked_number: string | null;
  card_company: string | null;
  bank_name: string | null;
  alias_name: string;
  card_image_url: string | null;
  // ... 사용하지 않는 다른 속성들은 생략 가능
}

// 화면에 표시하기 위해 가공된 데이터 타입
interface DisplayMethod {
  id: number;
  category: string;
  name: string;
  description: string;
  img: string;
}

type PaymentMethodBoxProps = {
  category: string;
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

const PaymentMethodBox = ({ category, selectedId, setSelectedId }: PaymentMethodBoxProps) => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const userId = useUserStore((state) => state.userId);

  const [methods, setMethods] = useState<DisplayMethod[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // API 응답 전체 구조에 맞게 타입 지정
        const res = await axios.get<{ data: PaymentMethodProvider[] }>(
          `${import.meta.env.VITE_BASE_URL}payment-methods/users/${userId}`,
        );

        // 실제 데이터 배열은 res.data.data에 있습니다.
        const apiData = res.data.data;

        const processedMethods: DisplayMethod[] = apiData.map((provider) => {
          const details = providerDetails[provider.provider_id] || providerDetails.DEFAULT;

          // let description = '';
          // if (provider.card_company && provider.masked_number) {
          //   description = `${provider.card_company} | ${provider.masked_number}`;
          // } else if (provider.bank_name && provider.masked_number) {
          //   description = `${provider.bank_name} | ${provider.masked_number}`;
          // }

          let name = '';
          if(provider.card_company){
            name = `${provider.card_company}`
          }else if(provider.bank_name){
            name = `${provider.bank_name}`
          }
           else if(provider.alias_name){
            name = `${provider.alias_name}`
          }


          let description = '';
          if (provider.card_company && provider.masked_number) {
            description = `${provider.masked_number}`;
          } else if (provider.bank_name && provider.masked_number) {
            description = `${provider.masked_number}`;
          }

          return {
            id: provider.method_id,
            category: details.category,
            // name: provider.alias_name,
            name,
            description,
            img: provider.card_image_url || details.img,
          };
        });

        setMethods(processedMethods);
      } catch (err) {
        const errorMessage = axios.isAxiosError(err)
          ? `API 에러: ${err.message}`
          : '알 수 없는 에러가 발생했습니다';

        setError(errorMessage);
        console.error('API 호출 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        {' '}
        {/* Linter 오류 수정 */}
        <div>데이터를 불러오는 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className={styles.error}>
          <p>데이터를 불러올 수 없습니다</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // 이제 정적 데이터가 아닌 state의 methods를 필터링합니다.
  const filtered =
    category === 'card_or_account'
      ? methods.filter(
          (method) => method.category === 'card_payment' || method.category === 'account_payment',
        )
      : methods.filter((method) => method.category === category);

  const handleClick = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {filtered.map((method) => (
        <div
          key={method.id} // Linter 오류 수정: 올바른 id를 key로 사용
          className={`
            ${styles.payment_method_container}
            ${selectedId === method.id ? styles.selected : ''}
            ${darkMode ? styles.dark_mode : ''}
          `}
          onClick={() => handleClick(method.id)}
        >
          <div>
            <img src={method.img} alt={`${method.name} 로고`} />
            <div
              className={`${styles.payment_method_info} ${darkMode ? styles.payment_method_info_dark_mode : ''}`}
            >
              <p>{method.name}</p>
              {/* 잔액 대신 API에서 받은 카드/계좌 정보 표시 */}
              <p>{method.description}</p>
            </div>
          </div>
          <div className={styles.check}>
            {selectedId === method.id ? (
              <div className={styles.selected}>
                <img src={after_select} alt="선택 후 아이콘" />
                <p>선택됨</p>
              </div>
            ) : (
              <div className={styles.unselected}>
                <img src={before_select} alt="선택 전 아이콘" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethodBox;
