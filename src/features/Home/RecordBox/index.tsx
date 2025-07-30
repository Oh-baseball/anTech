import styles from './style.module.scss';

export interface RecordBoxItem {
  img: string;
  title: string;
  time: string;
  pay: number;
}

interface RecordBoxProps {
  RecordBoxItmes: RecordBoxItem[];
}

const RecordBox = ({RecordBoxItmes}: RecordBoxProps) => {
  return (
      <>
        {RecordBoxItmes.map((boxItem, idx) => (
          <div key={idx} className={styles.recordBox}>
            <div className={styles.left_items}>
              <div><img src={boxItem.img}/></div>
              <div className={styles.middle_items}>
                <p>{boxItem.title}</p>
                <p>{boxItem.time}</p>
              </div>
            </div>
            <p className={styles.amount_use}>-{boxItem.pay.toLocaleString()}원</p>
          </div>
        ))}
      </>
  )
};

export default RecordBox