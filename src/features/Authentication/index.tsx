import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './style.module.scss';
import '../../styles/global.scss';
import { sendAuthPattern } from '@/utils/patterApi';
import { PaymentMethodType } from '@/types/payment';
import { queryClient } from '@/App';
import { Order } from '@/types/order';

interface PinButton {
  id: number;
  actualValue: number;
  isAnimating: boolean;
}

//fisher-yates 알고리즘
const fisherYatesShuffle = (array: number[]): number[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const createPinButtons = (): PinButton[] => {
  const shuffledNumbers = fisherYatesShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return shuffledNumbers.map((num, idx) => ({
    id: idx + 1,
    actualValue: num,
    isAnimating: false,
  }));
};

const getRandomButtonIds = (clickedId: number, totalButtons: number): number[] => {
  const otherIds = Array.from({ length: totalButtons }, (_, i) => i + 1).filter(
    (id) => id != clickedId,
  );

  const shuffled = fisherYatesShuffle(otherIds);

  return shuffled.slice(0, 3);
};

const chunkArray = (array: PinButton[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
};

const Authentication = () => {
  const navigate = useNavigate();
  const [pinButtons, setPinButtons] = useState<PinButton[]>(createPinButtons());
  const [enteredPin, setEnteredPin] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const methodId = searchParams.get('methodId');
  const orderData = queryClient.getQueryData<Order>(['order', orderId]);

  const handleButtonClick = (buttonId: number, actualValue: number) => {
    if (enteredPin.length >= 6 || isCompleted) return;

    const animatingButtonIds = getRandomButtonIds(buttonId, 9);

    setPinButtons((prev) =>
      prev.map((btn) => ({
        ...btn,
        isAnimating: animatingButtonIds.includes(btn.id),
      })),
    );
    const newPin = [...enteredPin, actualValue];
    setEnteredPin(newPin);

    if (newPin.length === 6) {
      setIsCompleted(true);
      handlePinComplete(newPin);
    }

    setTimeout(() => {
      setPinButtons((prev) =>
        prev.map((btn) => ({
          ...btn,
          isAnimating: false,
        })),
      );
    }, 300);
  };

  const handlePinComplete = async (pin: number[]) => {
    setIsLoading(true);
    setErrorMessage('');

    if (!methodId) {
      return;
    }

    // 주문 조회에서 받은 실제 데이터와 정확히 일치시키기
    const authData = {
      user_id: 1,
      auth_type: 'PIN' as const,
      auth_value: pin.join(''),
      device_info: navigator.userAgent,
      order_id: orderId,
      method_id: Number(methodId),
      payment_method: 'MOBILE_PAY' as PaymentMethodType,
      payment_amount: orderData?.final_amount ?? 0,
      point_used: 0,
    };

    try {
      const result = await sendAuthPattern(authData);
      console.log('PIN 인증 결과:', result);

      if (result.success) {
        setTimeout(() => {
          navigate(`/payment/completed?orderId=${orderId}&methodId=${methodId}`);
        }, 1000);
      } else {
        // 서버에서 실패 응답이 온 경우
        const failureReason = result.data?.failure_reason || '인증에 실패했습니다.';
        setErrorMessage(failureReason);
        setIsCompleted(false);
        setEnteredPin([]);
        setPinButtons(createPinButtons());
      }
    } catch (error: any) {
      console.error('PIN 인증 오류:', error);
      const errorMsg =
        error.response?.data?.data?.failure_reason ||
        error.response?.data?.message ||
        '서버 오류가 발생했습니다.';
      setErrorMessage(errorMsg);
      setIsCompleted(false);
      setEnteredPin([]);
      setPinButtons(createPinButtons());
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setEnteredPin([]);
    setIsCompleted(false);
    setErrorMessage('');
    setPinButtons(createPinButtons());
  };

  const patternRows = chunkArray(pinButtons, 3);

  return (
    <header className={styles.authentication_container}>
      <h3>PIN 입력</h3>
      <h4>6자리 PIN 번호를 입력해주세요 </h4>

      <div className={styles.pin_display}>
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={`${styles.pin_dot} ${i < enteredPin.length ? styles.filled : ''}`}
          />
        ))}
      </div>

      {errorMessage && <div className={styles.error_message}>{errorMessage}</div>}

      <main>
        <div className={styles.pattern_container}>
          {patternRows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.patternRow}>
              {row.map((button) => (
                <button
                  key={button.id}
                  className={`${styles.pattern_container_item} ${button.isAnimating ? styles.animating : ''}`}
                  onClick={() => handleButtonClick(button.id, button.actualValue)}
                  disabled={isCompleted || isLoading}
                >
                  {button.actualValue}
                </button>
              ))}
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <button
          className={isCompleted ? styles.primary : styles.secondary}
          disabled={!isCompleted || isLoading}
        >
          {isLoading ? '인증 중...' : isCompleted ? '인증 완료' : 'PIN 입력 중'}
        </button>
        <div className={styles.footer_divider}></div>
        <button onClick={handleReset} disabled={isLoading}>
          다시 입력
        </button>
      </footer>
    </header>
  );
};

export default Authentication;
