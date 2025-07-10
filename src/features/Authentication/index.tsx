import { useState } from 'react';
import styles from './style.module.scss';

type Pattern = {
  id: number;
  value: number;
};

const pattern = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
  { id: 6, value: 6 },
  { id: 7, value: 7 },
  { id: 8, value: 8 },
  { id: 9, value: 9 },
];

const chunkArray = (array: Pattern[], size: number) => {
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
        <div className={styles.pattern_container}>
          {patternRows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.patternRow}>
              {row.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.pattern_container_item}>
                  {item.value}
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
