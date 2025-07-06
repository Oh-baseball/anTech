import { ReactNode } from 'react';
import styles from './style.module.scss';

const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.mobileWrapper}>{children}</div>;
};

export default MobileWrapper;
