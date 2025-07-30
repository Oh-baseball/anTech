import { SmallSquareBoxItem } from '@/features/Home/SmallSquareBox';
import styles from './style.module.scss';

interface DarkSmallSquareBoxProps {
  SmallSquareBoxItems: SmallSquareBoxItem[];
}

const DarkSmallSquareBox = ({SmallSquareBoxItems}: DarkSmallSquareBoxProps) => {
  return (
  <>
    {SmallSquareBoxItems.map((boxItem, idx) => (
          <button key={idx} className={styles.smallSquareBox}>
            <div>
              <img/>
            </div>
            <p>{boxItem.title}</p>
            <p></p>
          </button>
    ))}
  </>
  )
};

export default DarkSmallSquareBox