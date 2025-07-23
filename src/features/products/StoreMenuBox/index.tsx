import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export interface StoreMenuBoxItem {
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
  scrollToCategory?: (category: string) => void;
}

export interface StoreMenuBoxRef {
  categoryRefs: Record<string, HTMLDivElement | null>; //{카테고리명: div DOM} 형태
}

const dummyCategories = ["커피", "디저트", "샌드위치"];

const dummyMenuItems = [
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '아메리카노',
    content: '깔끔하고 진한 에스프레소의 맛',
    price: 4500,
    category: '커피'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카페라떼',
    content: '부드러운 우유와 에스프레소의 맛',
    price: 5000,
    category: '커피'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카푸치노',
    content: '진한 에스프레소와 부드러운 폼밀크의 맛',
    price: 5500,
    category: '커피'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '아메리카노',
    content: '깔끔하고 진한 에스프레소의 맛',
    price: 4500,
    category: '커피'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카페라떼',
    content: '부드러운 우유와 에스프레소의 맛',
    price: 5000,
    category: '커피'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카푸치노',
    content: '진한 에스프레소와 부드러운 폼밀크의 맛',
    price: 5500,
    category: '커피'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코케이크',
    content: '깔끔하고 진한 초코의 맛',
    price: 4500,
    category: '디저트'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기케이크',
    content: '부드러운 우유와 딸기의 맛',
    price: 5000,
    category: '디저트'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '생크림케이크',
    content: '진한 생크림 부드러운 폼밀크의 맛',
    price: 5500,
    category: '디저트'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코케이크',
    content: '깔끔하고 진한 초코의 맛',
    price: 4500,
    category: '디저트'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기케이크',
    content: '부드러운 우유와 딸기의 맛',
    price: 5000,
    category: '디저트'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '생크림케이크',
    content: '진한 생크림 부드러운 폼밀크의 맛',
    price: 5500,
    category: '디저트'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '크림샌드위치',
    content: '부드러운 크림과 샌드위치의 맛',
    price: 5500,
    category: '샌드위치'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코샌드위치',
    content: '깔끔하고 진한 초코의 맛',
    price: 4500,
    category: '샌드위치'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기샌드위치',
    content: '부드러운 우유와 딸기의 맛',
    price: 5000,
    category: '샌드위치'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '크림샌드위치',
    content: '부드러운 크림과 샌드위치의 맛',
    price: 5500,
    category: '샌드위치'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코샌드위치',
    content: '깔끔하고 진한 초코의 맛',
    price: 4500,
    category: '샌드위치'
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기샌드위치',
    content: '부드러운 우유와 딸기의 맛',
    price: 5000,
    category: '샌드위치'
  }
];


const StoreMenuBox = forwardRef<StoreMenuBoxRef, StoreMenuBoxProps>(
  ({ StoreMenuBoxItmes, StoreCategories, onTabChange, scrollToCategory }, ref) => {
    const items = StoreMenuBoxItmes ?? dummyMenuItems;
    const categories = StoreCategories ?? dummyCategories;

    const [selectedIdx, setSelectedIdx] = useState<string | null>(null);
    const [pressedIdx, setPressedIdx] = useState<string | null>(null);

    const [activeTab, setActiveTab] = useState(categories[0]);

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

    // const handleTabClick = (cat: string) => {
    //   setActiveTab(cat);
    //   scrollToCategory?.(cat);
    //   onTabChange?.(cat);
    // };
    
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
      // eslint-disable-next-line
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
                  selectedIdx === item.name + idx ? styles.selected : "",
                  pressedIdx === item.name + idx ? styles.pressed : "",
                ].join(" ");

                return (
                  <motion.div
                    key={item.name + idx}
                    className={className}
                    onClick={() => setSelectedIdx(item.name + idx)}
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
                      <img src={item.img} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </>
    );
  }
);

StoreMenuBox.displayName = 'StoreMenuBox';

export default StoreMenuBox;
