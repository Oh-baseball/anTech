import StoreButton from '../StoreButton';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../utils/utils';
import useDarkModeStore from '@/store/useDarkModeStore';
import useUserStore from '@/store/useUserStore';
import createOrder, {CreateOrderRequest} from '@/apis/orders/createOrder';

interface StoreButtonBoxProps {
  selectedId: number | null;
  setCartCount: (count: number) => void;
  selectedItems: { menu_id: number; quantity: number }[];  // 새로 추가
}

const StoreButtonBox = ({ selectedId, setCartCount, selectedItems }: StoreButtonBoxProps) => {
  const navigate = useNavigate();
  const darkMode = useDarkModeStore((state) => state.darkMode);
  
  const userId = useUserStore((state) => state.userId);

  const handleAddToCart = () => {
    addToCart(selectedId);
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalCount = cart.reduce((sum: number, item: { count: number }) => sum + item.count, 0);
    setCartCount(totalCount);
  };

  const handleCreateOrder = async () => {
    // if (!userId) {
    //   alert('로그인이 필요합니다.');
    //   return;
    // }
    if (selectedItems.length === 0) {
      alert('주문할 상품을 선택해주세요.');
      return;
    }

    try {
      const req:CreateOrderRequest = {
        user_id: 1,
        store_id: 1,
        items: selectedItems.map(item => ({
          menu_id: item.menu_id,
          quantity: 1
        })),
        point_used: 0,
      };

      const res = await createOrder(req);
      if (res.success) {
      //  alert('주문이 성공적으로 생성되었습니다.');
        navigate('/payment/method');  
      } else {
     //   alert(`주문 실패: ${res.message}`);
      }
    } catch (error) {
   //   alert((error as Error).message || '주문 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={`${styles.storeButtonBox} ${darkMode ? styles.dark_mode : ''}`}>
      <StoreButton StoreButtonItem={{ name: '장바구니 담기' }} onClick={handleAddToCart} />
      <StoreButton
        StoreButtonItem={{ name: '바로 결제하기' }}
        onClick={handleCreateOrder}
      />
    </div>
  );
};

export default StoreButtonBox;

