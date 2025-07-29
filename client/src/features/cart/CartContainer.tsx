import CartBox from '@/features/cart/CartBox';
import StoreInfoBox from '@/features/products/StoreInfoBox';
import CartButtonBox from './CartButtonBox';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { getCartDetails } from '@/utils/utils';
import { CartItem } from '@/types/store';
import useDarkModeStore from '@/store/useDarkModeStore';

const CartContainer = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const darkMode = useDarkModeStore((state) => state.darkMode);

  useEffect(() => {
    const cartDetails = getCartDetails();
    setItems(cartDetails);
  }, []);

  // 수량 변경
  const handleIncrease = (idx: number) => {
    setItems((prev) => {
      const newItems = prev.map((item, i) =>
        i === idx ? { ...item, count: item.count + 1 } : item,
      );
      // 로컬스토리지 동기화
      const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const id = newItems[idx].id;
      const cartIdx = cart.findIndex((item: { id: number; count: number }) => item.id === id);
      if (cartIdx !== -1) {
        cart[cartIdx].count = newItems[idx].count;
        localStorage.setItem('cartItems', JSON.stringify(cart));
      }
      return newItems;
    });
  };

  const handleDecrease = (idx: number) => {
    setItems((prev) => {
      const newItems = prev.map((item, i) =>
        i === idx && item.count > 1 ? { ...item, count: item.count - 1 } : item,
      );
      const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const id = newItems[idx].id;
      const cartIdx = cart.findIndex((item: { id: number; count: number }) => item.id === id);
      if (cartIdx !== -1) {
        cart[cartIdx].count = newItems[idx].count;
        localStorage.setItem('cartItems', JSON.stringify(cart));
      }
      return newItems;
    });
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <>
      <Header
        prevBtn={true}
        title="장바구니"
        right={
          <button
            className={styles.delete}
            onClick={() => {
              setItems([]);
              localStorage.removeItem('cartItems');
            }}
          >
            전체삭제
          </button>
        }
      />
      <StoreInfoBox />
      <CartBox items={items} onIncrease={handleIncrease} onDecrease={handleDecrease} />
      {/* <CartTotalBox items={items}/> */}
      <CartButtonBox amount={totalPrice} />
    </>
  );
};

export default CartContainer;
