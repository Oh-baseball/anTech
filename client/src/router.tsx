import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Authentication from './features/Authentication';
import PatternLockDemo from './features/pattern';
import Remittance from './pages/Remittance';

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
      { path: 'login', element: <Login /> },
      { path: 'Remittance', element: <Remittance /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
      { path: 'verify', element: <Verify /> },
      {
        path: 'payment',
        children: [
          { path: 'method', element: <PaymentMethod /> },
          { path: 'confirm', element: <PaymentConfirm /> },
          { path: 'completed', element: <PaymentCompleted /> },
        ],
      },
      {
        path: 'auth',
        children: [
          { path: 'pattern', element: <PatternLockDemo /> },
          { path: 'pin', element: <Authentication /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
