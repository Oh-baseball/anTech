import styles from './style.module.scss';
import { LucideIcon } from 'lucide-react';

export interface SmallSquareBoxItem {
  icon: LucideIcon;
  title: string;
  content?: string;
  onClick: () => void;
}

interface SmallSquareBoxProps {
  SmallSquareBoxItems: SmallSquareBoxItem[];
}

const SmallSquareBox = ({SmallSquareBoxItems}: SmallSquareBoxProps) => {

  return (
    <>
      {SmallSquareBoxItems.map((boxItem, idx) => {
        const Icon = boxItem.icon;
        return (
          <button
            key={idx}
            className={styles.smallSquareBox}
            onClick={boxItem.onClick}
          >
            <div>
              <Icon size={38} color="#528eff" />  {/* 크기/색상 자유조정 */}
            </div>
            <div className={styles.bottom_items}>
              <p>{boxItem.title}</p>
              <div>
                <p>{boxItem.content}</p>
              </div>
            </div>
          </button>
        );
      })}
  </>
  )
};

export default SmallSquareBox