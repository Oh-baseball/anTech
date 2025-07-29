import { useEffect, useRef, useState } from 'react';
import StoreInfoBox from '@/features/products/StoreInfoBox';
import StoreMenuBox, { StoreMenuBoxRef } from '@/features/products/StoreMenuBox';
import StoreTabBox from '@/features/products/StoreTabBox';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import useMenuStore from '@/features/products/menuStore';
import useDarkModeStore from '@/store/useDarkModeStore';

const ProductsContainer = () => {
  const menuBoxRef = useRef<StoreMenuBoxRef>(null);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('커피');
  const [cartCount, setCartCount] = useState(0);

  const { menuItems, categories, fetchMenus } = useMenuStore();

  const darkMode = useDarkModeStore((state) => state.darkMode);

  // 장바구니 개수
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]') as {
      id: number;
      count: number;
    }[];
    setCartCount(cart.reduce((sum, item) => sum + item.count, 0));
  }, []);

  // 메뉴 데이터 로딩
  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);

  useEffect(() => {
    if (categories.length > 0) {
      setActiveTab(categories[0]);
    }
  }, [categories]);

  const handleTabChange = (category: string) => {
    setActiveTab(category);
  };

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    const target = menuBoxRef.current?.categoryRefs[category];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_mode : ''}`}>
      <Header
        prevBtn={true}
        title="스타벅스 강남점"
        right={
          <div
            className={styles.cartbox}
            onClick={() => navigate('/cart', { viewTransition: true })}
          >
            <span className={styles.cart}>🛒</span>
            <span className={styles.cartcount}>{cartCount}</span>
          </div>
        }
      />
      <StoreInfoBox />
      <StoreTabBox
        StoreTabBoxItmes={categories.map((c) => ({ name: c }))}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <StoreMenuBox
        StoreMenuBoxItmes={menuItems}
        StoreCategories={categories}
        onTabChange={handleTabChange}
        ref={menuBoxRef}
        setCartCount={setCartCount}
      />
    </div>
  );
};

export default ProductsContainer;
