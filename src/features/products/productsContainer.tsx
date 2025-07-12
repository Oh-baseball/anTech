import { useState, useRef } from "react";
import StoreInfoBox from "@/features/products/StoreInfoBox";
import StoreMenuBox, { StoreMenuBoxRef } from "@/features/products/StoreMenuBox";
import StoreButtonBox from "@/features/products/StoreButtonBox";
import StoreTabBox from "@/features/products/StoreTabBox";
import MobileWrapper from "@/components/MobileWrapper";
import Header from "@/components/Header";

const ProductsContainer = () => {
  const [activeTab, setActiveTab] = useState("커피");
  const menuBoxRef = useRef<StoreMenuBoxRef>(null);

  const handleTabChange = (category: string) => {
    setActiveTab(category);
  };

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    const target = menuBoxRef.current?.categoryRefs[category];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
    <MobileWrapper>
    <Header 
        prevBtn={true}
        title="스타벅스 강남점"
        right={<button style={{ fontSize: '20px' }}>🛒</button>}
      />
      <StoreInfoBox/>
      <StoreTabBox activeTab={activeTab} onTabClick={handleTabClick}/>
      <StoreMenuBox 
        onTabChange={handleTabChange}
        scrollToCategory={handleTabClick}
        ref={menuBoxRef}
      />
      <StoreButtonBox/>
    </MobileWrapper>
    </>
  );
};

export default ProductsContainer;
