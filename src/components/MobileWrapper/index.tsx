import { ReactNode } from 'react';
import styles from './style.module.scss';

const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.mobile_wrapper}>{children}</div>;
};

export default MobileWrapper;
