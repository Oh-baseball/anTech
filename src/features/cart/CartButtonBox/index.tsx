import CartButton from '../CartButton';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const darkMode = useDarkModeStore((state) => state.darkMode);

  const userId = useUserStore((state) => state.userId);
  const createOrderMutation = useCreateOrder();

  const handleOrder = async () => {
    // if (!userId) {
    //   alert('로그인이 필요합니다.');
    //   return;
    // }

    if (items.length === 0) {
      alert('장바구니가 비어있습니다.');
      return;
    }

    const req: CreateOrderRequest = {
      user_id: 1,
      store_id: 1,
      items: items.map((item) => ({
        menu_id: item.id,
        quantity: item.count,
      })),
      point_used: 0,
    };

    createOrderMutation.mutate(req, {
      onSuccess: (data) => {
        const orderId = data?.data.order_id;
        console.log(orderId);
        if (orderId) {
          navigate(`/payment/method?orderId=${orderId}`);
          return;
        }
        alert('주문 생성 실패');
      },
      onError: (error) => console.log('error', error),
    });
  };

  return (
    <div className={`${styles.cartButtonBox} ${darkMode ? styles.dark_mode : ''}`}>
      <CartButton CartButtonItem={{ amount }} onClick={handleOrder} />
    </div>
  );
};

export default CartButtonBox;
