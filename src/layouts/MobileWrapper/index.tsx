import { ReactNode } from 'react';
import './style.sass';

const MoblieWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="mobile-layout">{children}</div>;
};

export default MoblieWrapper;
