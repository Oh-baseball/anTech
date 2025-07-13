import { SmallSquareBoxItem } from '@/components/SmallSquareBox';
import styles from './style.module.scss';

interface SmallSquareBoxProps {
  SmallSquareBoxItems: SmallSquareBoxItem[];
}

const SmallSquareBoxDark = ({SmallSquareBoxItems}: SmallSquareBoxProps) => {
  return (
  <>
    {SmallSquareBoxItems.map((boxItem, idx) => (
          <button key={idx} className={styles.smallSquareBox}>
            <div>
              <img src={boxItem.img}/>
            </div>
            <p>{boxItem.title}</p>
            <p></p>
          </button>
    ))}
  </>
  )
};

export default SmallSquareBoxDark