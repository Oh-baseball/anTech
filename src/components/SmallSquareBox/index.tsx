import styles from './style.module.scss';

export interface SmallSquareBoxItem {
  img?: string;
  title: string;
  content?: string;
}

interface SmallSquareBoxProps {
  SmallSquareBoxItems: SmallSquareBoxItem[];
}

const SmallSquareBox = ({SmallSquareBoxItems}: SmallSquareBoxProps) => {
  return (
  <div className={styles.smallSquareBox}>
    {SmallSquareBoxItems.map((boxItem, idx) => (
          <button key={idx}>
            <div>
              <img src={boxItem.img}/>
            </div>
            <div className={styles.bottom_items}>
              <p>{boxItem.title}</p>
              <p>{boxItem.content}</p>
            </div>
          </button>
    ))}
  </div>
  )
};

export default SmallSquareBox