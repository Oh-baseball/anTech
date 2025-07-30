import Header from '@/components/Header';
import PaymentStore from './PaymentStore';
import PaymentTitle from './PaymentTitle';
import PaymentMethodBox from './PaymentMethodBox';
import PaymentButton from '@/features/paymentMethod/PaymentButton';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import useDarkModeStore from '@/store/useDarkModeStore';
import CancelButton from '@/components/CancelButton';

const PaymentMethodContainer = ({
  selectedMethod,
  setSelectedMethod,
  handleNext,
}: {
  selectedMethod: string | null;
  setSelectedMethod: React.Dispatch<React.SetStateAction<string | null>>;
  handleNext: () => void;
}) => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    setSelectedMethod(selectedId ? selectedId.toString() : null);
  }, [selectedId, setSelectedMethod]);

  const sections = [
    { title: '간편결제', categories: ['easy_payment'] },
    { title: '카드 · 계좌', categories: ['card_payment', 'account_payment'] },
  ];

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
                  selectedMethod={selectedMethod}
                  setSelectedMethod={setSelectedMethod}
                />
              ) : (
                <PaymentMethodBox
                  category="card_or_account"
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  selectedMethod={selectedMethod}
                  setSelectedMethod={setSelectedMethod}
                />
              )}
            </div>
          ))}
        </div>

        <PaymentButton buttonOnClick={handleNext} />
      </div>
    </div>
  );
};
export default PaymentMethodContainer;
