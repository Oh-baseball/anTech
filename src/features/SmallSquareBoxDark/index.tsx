import { SmallSquareBoxItem } from '@/components/SmallSquareBox';
import styles from './style.module.scss';

interface SmallSquareBoxProps {
  SmallSquareBoxItems: SmallSquareBoxItem[];
}

const SmallSquareBoxDark = ({SmallSquareBoxItems}: SmallSquareBoxProps) => {
  return (
  <div className={styles.smallSquareBox}>
    {SmallSquareBoxItems.map((boxItem, idx) => (
          <button key={idx}>
            <div>
              <img src={boxItem.img}/>
            </div>
            <p>{boxItem.title}</p>
            <p>{boxItem.content}</p>
          </button>
    ))}
  </div>
  )
};

export default SmallSquareBoxDark