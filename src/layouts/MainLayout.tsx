import MobileWrapper from '@/components/MobileWrapper';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <MobileWrapper>
      <Suspense fallback={<div>로딩 중~~~~~~~~~~~~~</div>}>
        <Outlet />
      </Suspense>
    </MobileWrapper>
  );
};

export default MainLayout;
