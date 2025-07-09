import styles from './style.module.scss';

export interface SmallSquareBoxItem {
  img: string;
  title: string;
  content: string;
}

interface SmallSquareBoxProps {
  SmallSquareBoxItems: SmallSquareBoxItem[];
}

const SmallSquareBox = ({SmallSquareBoxItems}: SmallSquareBoxProps) => {
  return (
  <div className={styles.smallSquareBox}>
    {SmallSquareBoxItems.map((boxItem, idx) => (
          <button key={idx}>
            <img src={boxItem.img}/>
            <p>{boxItem.title}</p>
            <p>{boxItem.content}</p>
          </button>
    ))}
  </div>
  )
};

export default SmallSquareBox