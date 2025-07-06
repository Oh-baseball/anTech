import './styles/reset.css';
import './App.css';
import MoblieWrapper from '@/components/MobileWrapper';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <MoblieWrapper>
      <RouterProvider router={router} />
    </MoblieWrapper>
  );
}

export default App;
