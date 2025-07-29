import CartButton from '../CartButton';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const CartButtonBox = ({ amount }: { amount: number }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cartButtonBox}>
      <CartButton CartButtonItem={{ amount }} onClick={() => navigate('/payment/method')} />
    </div>
  );
};

export default CartButtonBox;
