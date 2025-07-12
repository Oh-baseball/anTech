import { RecordBoxItem } from '@/components/RecordBox';
import styles from './style.module.scss';

interface RecordBoxDarkProps {
  recordBoxDarkItems: RecordBoxItem[];
}

const RecordBoxDark = ({recordBoxDarkItems}: RecordBoxDarkProps) => {
  return (
    <>
      {recordBoxDarkItems.map((boxItem, idx) => (
        <div key={idx} className={styles.recordBox}>
          <div className={styles.left_items}>
            <div><img src={boxItem.img}/></div>
            <div className={styles.middle_items}>
              <p>{boxItem.title}</p>
              <p></p>
            </div>
          </div>
          <p className={styles.amount_use}>-{boxItem.pay.toLocaleString()}원</p>
        </div>
      ))}
    </>
  )
};

export default RecordBoxDark