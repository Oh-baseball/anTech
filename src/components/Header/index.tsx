import { ReactNode } from 'react';
import styles from './style.module.scss';
import backIcon from '@/assets/back-icon.svg';
import backIconDarkMode from '@/assets/back-icon_dark_mode.svg';
import useDarkModeStore from '@/store/useDarkModeStore';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  prevBtn?: boolean;
  title?: string;
  right?: ReactNode;
}

const Header = ({ prevBtn, title, right }: HeaderProps) => {
  const navigate = useNavigate();
  const darkMode = useDarkModeStore((state) => state.darkMode);

  const handleClickPrevBtn = () => {
    navigate(-1);
  };
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {prevBtn && (
          <button className={styles.backBtn} onClick={handleClickPrevBtn} aria-label="뒤로가기">
            {darkMode ? (
              <img src={backIconDarkMode} alt="뒤로가기" />
            ) : (
              <img src={backIcon} alt="뒤로가기" />
            )}
          </button>
        )}
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.right}>{right}</div>
    </header>
  );
};

export default Header;
