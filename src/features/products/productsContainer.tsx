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

  //메뉴 리스트에서 스크롤 등으로 인해 현재 보이는 카테고리가 바뀔 때 실행
  const handleTabChange = (category: string) => {
    setActiveTab(category);
  };

  //상단의 카테고리 탭 UI에서 클릭 시 실행
  const handleTabClick = (category: string) => {
    setActiveTab(category);
    //자식이 넘겨준 각 카테고리별 div DOM을 가져옴
    //자식에서 useImperativeHandle로 넘긴 값은 부모에서 ref.current.속성명 으로 바로 쓸 수 있다
    const target = menuBoxRef.current?.categoryRefs[category];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" }); 
    } //scrollIntoView: Element 인터페이스의 메소드 / 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤
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
