import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import StoreButtonBox from "../StoreButtonBox";
import americanoImg from "@/assets/americano2.jpg";
import latteImg from "@/assets/latte.jpg";
import cappuImg from "@/assets/cappuccino.jpg";
import chocoImg from "@/assets/chococake.jpg";
import strImg from "@/assets/strcake.jpg";
import creamImg from "@/assets/creamcake.jpg";
import carrotImg from "@/assets/carrot.jpg";
import eggImg from "@/assets/egg.jpg";
import chickenImg from "@/assets/chicken.jpg";


export interface StoreMenuBoxItem {
  id: number;
  img: string;
  name: string;
  content: string;
  price: number;
  category: string;
}

interface StoreMenuBoxProps {
  StoreMenuBoxItmes?: StoreMenuBoxItem[];
  StoreCategories?: string[];
  onTabChange?: (category: string) => void;
  setCartCount: (count: number) => void;
  cartIconRef: React.RefObject<HTMLSpanElement>;
}

export interface StoreMenuBoxRef {
  categoryRefs: Record<string, HTMLDivElement | null>; //{카테고리명: div DOM} 형태
}

const dummyCategories = ["커피", "디저트", "샌드위치"];

export const dummyMenuItems = [
  {
    id:1,
    img: americanoImg,
    name: '아메리카노',
    content: '깔끔하고 진한 에스프레소의 맛',
    price: 4500,
    category: '커피'
  },
  {
    id:2,
    img: latteImg,
    name: '카페라떼',
    content: '부드러운 우유와 에스프레소의 맛',
    price: 5000,
    category: '커피'
  },
  {
    id:3,
    img: cappuImg,
    name: '카푸치노',
    content: '진한 에스프레소와 부드러운 폼밀크의 맛',
    price: 5500,
    category: '커피'
  },
  {
    id:4,
    img: americanoImg,
    name: '아메리카노',
    content: '깔끔하고 진한 에스프레소의 맛',
    price: 4500,
    category: '커피'
  },
  {
    id:5,
    img: latteImg,
    name: '카페라떼',
    content: '부드러운 우유와 에스프레소의 맛',
    price: 5000,
    category: '커피'
  },
  {
    id:6,
    img: cappuImg,
    name: '카푸치노',
    content: '진한 에스프레소와 부드러운 폼밀크의 맛',
    price: 5500,
    category: '커피'
  },
  {
    id:7,
    img: chocoImg,
    name: '초코케이크',
    content: '깔끔하고 진한 초코의 맛',
    price: 4500,
    category: '디저트'
  },
  {
    id:8,
    img: strImg,
    name: '딸기케이크',
    content: '부드러운 우유와 딸기의 맛',
    price: 5000,
    category: '디저트'
  },
  {
    id:9,
    img: creamImg,
    name: '생크림케이크',
    content: '진한 생크림 부드러운 폼밀크의 맛',
    price: 5500,
    category: '디저트'
  },
  {
    id:10,
    img: chocoImg,
    name: '초코케이크',
    content: '깔끔하고 진한 초코의 맛',
    price: 4500,
    category: '디저트'
  },
  { 
    id:11,
    img: strImg,
    name: '딸기케이크',
    content: '부드러운 우유와 딸기의 맛',
    price: 5000,
    category: '디저트'
  },
  {
    id:12,
    img: creamImg,
    name: '생크림케이크',
    content: '진한 생크림 부드러운 폼밀크의 맛',
    price: 5500,
    category: '디저트'
  },
  {
    id:13,
    img: carrotImg,
    name: '당근샌드위치',
    content: '부드러운 당근 샌드위치',
    price: 5500,
    category: '샌드위치'
  },
  {
    id:14,
    img: chickenImg,
    name: '치킨샌드위치',
    content: '진한 치킨의 맛',
    price: 4500,
    category: '샌드위치'
  },
  { 
    id:15,
    img: eggImg,
    name: '에그샌드위치',
    content: '부드러운 계란의 맛',
    price: 5000,
    category: '샌드위치'
  },
  {
    id:16,
    img: carrotImg,
    name: '당근샌드위치',
    content: '부드러운 당근 샌드위치',
    price: 5500,
    category: '샌드위치'
  },
  {
    id:17,
    img: eggImg,
    name: '에그샌드위치',
    content: '부드러운 계란의 맛',
    price: 4500,
    category: '샌드위치'
  },
  {
    id:18,
    img: chickenImg,
    name: '치킨샌드위치',
    content: '진한 치킨의 맛',
    price: 5000,
    category: '샌드위치'
  }
];

const StoreMenuBox = forwardRef<StoreMenuBoxRef, StoreMenuBoxProps>(
  ({ StoreMenuBoxItmes, StoreCategories, scrollToCategory, onTabChange, setCartCount, cartIconRef }, ref) => {
    const items = StoreMenuBoxItmes ?? dummyMenuItems;
    const categories = StoreCategories ?? dummyCategories;

    // selectedIdx를 상품 id로 관리
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [pressedIdx, setPressedIdx] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState(categories[0]);

    const imgRef = useRef<Record<number, HTMLImageElement|null>>({});

    //부모(productsContainer)로 넘김
    const categoryRefs = useRef<Record<string, HTMLDivElement|null>>({});
    useImperativeHandle(ref, () => ({
      categoryRefs: categoryRefs.current
    }));

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      categories.forEach(cat => {
        if (!categoryRefs.current[cat]) {
          categoryRefs.current[cat] = null;
        }
      });
    }, [categories]);

    // 스크롤 시 현재 보이는 카테고리 감지
    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;

      const observer = new window.IntersectionObserver(
        (entries) => {
          // 화면에 가장 먼저 보이는 카테고리 찾기
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top));
          if (visible.length > 0) {
            const cat = visible[0].target.getAttribute("data-category");
            if (cat && cat !== activeTab) {
              setActiveTab(cat);
              onTabChange?.(cat);
            }
          }
        },
        {
          root: container,
          threshold: 0.5, // 50% 이상 보이면 해당 카테고리로 인식
        }
      );

      categories.forEach(cat => {
        const ref = categoryRefs.current[cat];
        if (ref) observer.observe(ref); //IntersectionObserver에 내가 관찰하고 싶은 DOM요소를 등록
      });

      return () => observer.disconnect();
    }, [activeTab, categories]);


    return (
      <>
        <div
          ref={scrollRef}
          className={styles.storeMenuBox}
        >
          {categories.map(cat => (
            <div
              key={cat}
              ref={el => {
                categoryRefs.current[cat] = el;
              }}
              data-category={cat}
              className={styles.categorySection}
            >
              {/* 카테고리별 메뉴들 */}
              {items.filter(item => item.category === cat).map((item, idx) => {
                const className = [
                  styles.storeMenu,
                  selectedId === item.id ? styles.selected : "",
                  pressedIdx === item.name + idx ? styles.pressed : "",
                ].join(" ");

                return (
                  <motion.div
                    key={item.name + idx}
                    className={className}
                    onClick={() => setSelectedId(item.id)}
                    tabIndex={0}
                    onTapStart={() => setPressedIdx(item.name + idx)}
                    onTap={() => setPressedIdx(null)}
                    onTapCancel={() => setPressedIdx(null)}
                  >
                    {pressedIdx === item.name + idx && <div className={styles.overlay} />}
                    <div className={styles.left_items}>
                      <p>{item.name}</p>
                      <p>{item.content}</p>
                      <p>{item.price.toLocaleString()}원</p>
                    </div>
                    <div className={styles.right_items}>
                      <img
                      src={item.img}
                      ref={el=>{imgRef.current[item.id]=el;}} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
        {/* StoreButtonBox에 selectedId를 prop으로 전달 */}
        <StoreButtonBox
        selectedId={selectedId}
        setCartCount={setCartCount}/>
      </>
    );
  }
);

export default StoreMenuBox;
