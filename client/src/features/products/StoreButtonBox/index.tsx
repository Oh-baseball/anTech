import StoreButton from '../StoreButton';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../utils/utils';

interface StoreButtonBoxProps {
  selectedId: number | null;
  setCartCount: (count: number) => void;
}

const StoreButtonBox = ({ selectedId, setCartCount }: StoreButtonBoxProps) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(selectedId);
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartCount(cart.reduce((sum, item) => sum + item.count, 0));
  };

  return (
    <div className={styles.storeButtonBox}>
      <StoreButton StoreButtonItem={{ name: '장바구니 담기' }} onClick={handleAddToCart} />
      <StoreButton
        StoreButtonItem={{ name: '바로 결제하기' }}
        onClick={() => navigate('/payment/method')}
      />
    </div>
  );
};

export default StoreButtonBox;
