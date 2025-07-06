import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import MobileWrapper from './components/MobileWrapper';

const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const VerifyPage = lazy(() => import('./pages/VerifyPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const CheckoutSuccessPages = lazy(() => import('./pages/CheckoutSuccessPages'));
const NoFound = lazy(() => import('./pages/NoFound'));

function MainLayout() {
  return (
    <MobileWrapper>
      <Suspense fallback={<div>로딩 중~~~</div>}>
        <Outlet />
      </Suspense>
    </MobileWrapper>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'verify',
        element: <VerifyPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'checkout/success',
        element: <CheckoutSuccessPages />,
      },
      {
        path: '*',
        element: <NoFound />,
      },
    ],
  },
]);

export default router;
