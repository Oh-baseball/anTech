import Loding from '@/components/Loading';
import MobileWrapper from '@/components/MobileWrapper';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <MobileWrapper>
      <Suspense fallback={<div><Loding/></div>}>
        <Outlet />
      </Suspense>
    </MobileWrapper>
  );
};

export default MainLayout;
