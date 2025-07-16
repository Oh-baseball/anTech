import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import Authentication from './features/Authentication';
import PatternLockDemo from './features/pattern';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./pages/Cart'));
const Verify = lazy(() => import('./pages/Verify'));
const PaymentMethod = lazy(() => import('./pages/PaymentMethod'));
const PaymentConfirm = lazy(() => import('./pages/PaymentConfirm'));
const PaymentCompleted = lazy(() => import('./pages/PaymentCompleted'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pageA', element: <PageA /> },
      { path: 'pageB', element: <PageB /> },
      { path: 'login', element: <Login/>},
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
      { path: 'verify', element: <Verify /> },
      { path: 'payment-method', element: <PaymentMethod /> },
      { path: 'payment-confirm', element: <PaymentConfirm /> },
      { path: 'payment-completed', element: <PaymentCompleted /> },
      { path: 'authentication', element: <Authentication /> },
      { path: 'pattern', element: <PatternLockDemo /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
