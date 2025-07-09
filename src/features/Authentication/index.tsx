import styles from './style.module.scss';

const Authentication = () => {
  return (
    <header className={styles.authentication_container}>
      <h3>패턴 입력</h3>
      <h4>패턴을 그려주세요</h4>
      <main>
        <div className={styles.patternContainer}>
          <div className={styles.patternContainer_1}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className={styles.patternContainer_2}>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div className={styles.patternContainer_3}>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
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
