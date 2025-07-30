import { Navigate } from 'react-router-dom';
import useUserStore from '@/store/useUserStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userId } = useUserStore();
  
  if (!userId) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;