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
  <>
    {SmallSquareBoxItems.map((boxItem, idx) => (
          <button key={idx} className={styles.smallSquareBox}>
            <div>
              <img src={boxItem.img}/>
            </div>
            <div className={styles.bottom_items}>
              <p>{boxItem.title}</p>
            <div>
              <p>{boxItem.content}</p>
            </div>
            </div>
          </button>
    ))}
  </>
  )
};

export default SmallSquareBox