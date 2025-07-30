import CartButton from '../CartButton';
import styles from './style.module.scss';
import { CreateOrderRequest } from '@/apis/orders/createOrder';
import useUserStore from '@/store/useUserStore';
import { CartItem } from '@/types/store';
import useDarkModeStore from '@/store/useDarkModeStore';
import { useCreateOrder } from '@/hooks/queries/useOrder';

interface CartButtonBoxProps {
  amount: number;
  items: CartItem[];
}

const CartButtonBox = ({ amount, items }: CartButtonBoxProps) => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  const userId = useUserStore((state) => state.userId);
  const createOrderMutation = useCreateOrder();

  const handleOrder = async () => {
    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (items.length === 0) {
      alert('장바구니가 비어있습니다.');
      return;
    }

    const req: CreateOrderRequest = {
      user_id: Number(userId) || 1,
      store_id: 1,
      items: items.map((item) => ({
        menu_id: item.id,
        quantity: item.count,
      })),
      point_used: 0,
    };

    createOrderMutation.mutate(req);

    localStorage.removeItem('cartItems');

  };

  return (
    <div className={`${styles.cartButtonBox} ${darkMode ? styles.dark_mode : ''}`}>
      <CartButton CartButtonItem={{ amount }} onClick={handleOrder} />
    </div>
  );
};

export default CartButtonBox;