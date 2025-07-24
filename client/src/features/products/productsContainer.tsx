import { useState, useRef, useEffect } from "react";
import StoreInfoBox from "@/features/products/StoreInfoBox";
import StoreMenuBox, { StoreMenuBoxRef } from "@/features/products/StoreMenuBox";
import StoreTabBox from "@/features/products/StoreTabBox";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

const ProductsContainer = () => {
  const [activeTab, setActiveTab] = useState("커피");
  const menuBoxRef = useRef<StoreMenuBoxRef>(null);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const cartIconRef = useRef<HTMLSpanElement>(null);

  //장바구니 개수
  useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartCount(cart.reduce((sum, item) => sum + item.count, 0));
    }, []);

    //스크롤 중 탭 변경 시
  const handleTabChange = (category: string) => {
    setActiveTab(category);
  };

  //탭 클릭 시
  const handleTabClick = (category: string) => {
    setActiveTab(category);
    const target = menuBoxRef.current?.categoryRefs[category];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" }); 
    }
  };

  return (
    <>
      <Header 
        prevBtn={true}
        title="스타벅스 강남점"
        right={
          <div className={styles.cartbox} onClick={() => navigate("/cart") }>
            <span className={styles.cart} ref={cartIconRef}>🛒</span>
            <span className={styles.cartcount}>{cartCount}</span>
          </div>
        }
      />
      <StoreInfoBox/>
      <StoreTabBox activeTab={activeTab} onTabClick={handleTabClick}/>
      <StoreMenuBox 
        onTabChange={handleTabChange}
        scrollToCategory={handleTabClick}
        ref={menuBoxRef}
        setCartCount={setCartCount}
        cartIconRef={cartIconRef}
      />
      {/* <StoreButtonBox/> */}
    </>
  );
};

// const ProductsContainer = () => (
//   <CartProvider>
//     <ProductsContainerInner />
//   </CartProvider>
// );

export default ProductsContainer;
