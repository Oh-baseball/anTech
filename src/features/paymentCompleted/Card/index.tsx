import { forwardRef } from 'react';
import styles from './style.module.scss';

const Card = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <>
      <div className={styles.card_container} ref={ref}>
        <div className={styles.card}>
          <div className={`${styles.card_face} ${styles.front}`}></div>
          <div className={styles.card_edge}></div>
          <div className={`${styles.card_face} ${styles.back}`}>Back</div>
        </div>
      </div>
    </>
  );
});

Card.displayName = 'Card';

export default Card;
