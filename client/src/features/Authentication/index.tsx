import { useState } from 'react';
import styles from './style.module.scss';
import '../../styles/global.scss';

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
  const [pinButtons, setPinButtons] = useState<PinButton[]>(createPinButtons());
  const [enteredPin, setEnteredPin] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

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

  const handleReset = () => {
    setEnteredPin([]);
    setIsCompleted(false);
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

      <main>
        <div className={styles.pattern_container}>
          {patternRows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.patternRow}>
              {row.map((button) => (
                <button
                  key={button.id}
                  className={`${styles.pattern_container_item} ${button.isAnimating ? styles.animating : ''}`}
                  onClick={() => handleButtonClick(button.id, button.actualValue)}
                  disabled={isCompleted}
                >
                  {button.actualValue}
                </button>
              ))}
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <button className={isCompleted ? styles.primary : styles.secondary} disabled={!isCompleted}>
          {isCompleted ? '인증 완료' : 'PIN 입력 중'}
        </button>
        <div className={styles.footer_divider}></div>
        <button onClick={handleReset}>다시 입력</button>
      </footer>
    </header>
  );
};

export default Authentication;
