import Header from '@/components/Header';
import PaymentStore from './PaymentStore';
import PaymentTitle from './PaymentTitle';
import PaymentMethodBox from './PaymentMethodBox';
import PaymentButton from '@/features/paymentMethod/PaymentButton';
import styles from './style.module.scss';
import { useState } from 'react';
import useDarkModeStore from '@/store/useDarkModeStore';
import CancelButton from '@/components/CancelButton';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PaymentMethodContainer = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');

  const sections = [
    { title: '간편결제', categories: ['easy_payment'] },
    { title: '카드 · 계좌', categories: ['card_payment', 'account_payment'] },
  ];

  const handleRocketEnd = () => {
    navigate(`/payment/confirm?orderId=${orderId}&methodId=${selectedId}`);
  };

  return (
    <div className={`${styles.wrapper} ${darkMode ? styles.dark_mode : ''}`}>
      <Header prevBtn={true} title="결제수단 선택" right={<CancelButton />} />

      <div className={styles.payment_method}>
        <PaymentStore />

        <div className={styles.payment_methodebox_container}>
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

        <PaymentButton handleRocketEnd={handleRocketEnd} />
      </div>
    </div>
  );
};
export default PaymentMethodContainer;
