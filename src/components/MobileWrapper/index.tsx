import { ReactNode } from 'react';
import './style.scss';

const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="mobile-wrapper">{children}</div>;
};

export default MobileWrapper;
