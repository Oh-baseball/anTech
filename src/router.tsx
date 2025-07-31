import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Authentication from './features/Authentication';
import PatternLockDemo from './features/pattern';
import Remittance from './pages/Remittance';
import Resister from './pages/Resister';
import QRScan from './pages/QRScan';
import Charge from './pages/Charge';
import ProtectedRoute from './components/ProtectedRoute';

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
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'resister', element: <Resister /> },
      { path: 'charge', element: <ProtectedRoute><Charge /></ProtectedRoute> },
      { path: 'qrscan', element: <ProtectedRoute><QRScan /></ProtectedRoute> },
      { path: 'remittance', element: <ProtectedRoute><Remittance /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'verify', element: <ProtectedRoute><Verify /></ProtectedRoute> },
      {
        path: 'payment',
        children: [
          { path: 'method', element: <ProtectedRoute><PaymentMethod /></ProtectedRoute> },
          { path: 'confirm', element: <ProtectedRoute><PaymentConfirm /></ProtectedRoute> },
          { path: 'completed', element: <ProtectedRoute><PaymentCompleted /></ProtectedRoute> },
        ],
      },
      {
        path: 'auth',
        children: [
          { path: 'pattern', element: <ProtectedRoute><PatternLockDemo /></ProtectedRoute> },
          { path: 'pin', element: <ProtectedRoute><Authentication /></ProtectedRoute> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
