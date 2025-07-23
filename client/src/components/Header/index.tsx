import { ReactNode } from 'react';
import styles from './style.module.scss';
import backIcon from '@/assets/back-icon.svg';

interface HeaderProps {
  prevBtn?: boolean;
  title?: string;
  right?: ReactNode;
}

const Header = ({ prevBtn, title, right }: HeaderProps) => {
  const handleClickPrevBtn = () => {
    console.log('뒤로가기');
  };
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {prevBtn && (
          <button className={styles.backBtn} onClick={handleClickPrevBtn} aria-label="뒤로가기">
            <img src={backIcon} alt="뒤로가기" />
          </button>
        )}
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.right}>{right}</div>
    </header>
  );
};

export default Header;
