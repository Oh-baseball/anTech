import CartButton from '../CartButton';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import createOrder, {CreateOrderRequest} from '@/apis/orders/createOrder';
import useUserStore from '@/store/useUserStore';
import { CartItem } from '@/types/store';
import useDarkModeStore from '@/store/useDarkModeStore';

interface CartButtonBoxProps {
  amount: number;
  items: CartItem[];
}

const CartButtonBox = ({ amount, items }: CartButtonBoxProps) => {
  const navigate = useNavigate();
  const darkMode = useDarkModeStore((state) => state.darkMode);

  const userId = useUserStore((state) => state.userId);

  const handleOrder = async () => {
    // if (!userId) {
    //   alert('로그인이 필요합니다.');
    //   return;
    // }

    if (items.length === 0) {
      alert('장바구니가 비어있습니다.');
      return;
    }

    const req:CreateOrderRequest = {
      user_id: 1,
      store_id: 1, 
      items: items.map((item) => ({
        menu_id: item.id,
        quantity: item.count,
      })),
      point_used: 0,
    };

    try {
      const res = await createOrder(req);
      if (res.success) {
       // alert('주문이 성공적으로 생성되었습니다.');
       localStorage.removeItem('cartItems');
       navigate('/payment/method', {
        state: {
          totalPrice: amount
        }
      });
      } else {
     //   alert(`주문 실패: ${res.message}`);
      }
    } catch (error) {
  //    alert((error as Error).message || '주문 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={`${styles.cartButtonBox} ${darkMode ? styles.dark_mode : ''}`}>
      <CartButton CartButtonItem={{ amount }} onClick={handleOrder} />
    </div>
  );
};

export default CartButtonBox;
