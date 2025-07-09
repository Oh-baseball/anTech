import { useState } from 'react';
import styles from './style.module.scss';

const pattern = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const chunkArray = (array: number[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Authentication = () => {
  const [isPin, setIsPin] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const patternRows = chunkArray(pattern, 3);

  return (
    <header className={styles.authentication_container}>
      <h3>패턴 입력</h3>
      <h4>패턴을 그려주세요</h4>
      <main>
        <div className={styles.patternContainer}>
          {patternRows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.patternRow}>
              {row.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.patternContainer_item}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <button>PIN으로 인증</button>
        <div className={styles.footer_divider}></div>
        <button>다시 그리기</button>
      </footer>
    </header>
  );
};

export default Authentication;
