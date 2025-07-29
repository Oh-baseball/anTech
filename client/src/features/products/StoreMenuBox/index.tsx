import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import StoreButtonBox from '../StoreButtonBox';
import { StoreMenuBoxItem } from '@/types/store';
import useDarkModeStore from '@/store/useDarkModeStore'

interface StoreMenuBoxProps {
  StoreMenuBoxItmes?: StoreMenuBoxItem[];
  StoreCategories?: string[];
  onTabChange?: (category: string) => void;
  setCartCount: (count: number) => void;
}

export interface StoreMenuBoxRef {
  categoryRefs: Record<string, HTMLDivElement | null>; //{카테고리명: div DOM} 형태
}

const StoreMenuBox = forwardRef<StoreMenuBoxRef, StoreMenuBoxProps>(
  ({ StoreMenuBoxItmes, StoreCategories, onTabChange, setCartCount }, ref) => {
    const items = StoreMenuBoxItmes ?? [];
    const categories = StoreCategories ?? [];

    const darkMode = useDarkModeStore((state) => state.darkMode);

    // selectedIdx를 상품 id로 관리
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [pressedIdx, setPressedIdx] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string | null>(categories[0] ?? null);

    const imgRef = useRef<Record<number, HTMLImageElement | null>>({});

    //부모(productsContainer)로 넘김
    const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
    useImperativeHandle(ref, () => ({
      categoryRefs: categoryRefs.current,
    }));

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      categories.forEach((cat) => {
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
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible.length > 0) {
            const cat = visible[0].target.getAttribute('data-category');
            if (cat && cat !== activeTab) {
              setActiveTab(cat);
              onTabChange?.(cat);
            }
          }
        },
        {
          root: container,
          threshold: 0.5, // 50% 이상 보이면 해당 카테고리로 인식
        },
      );

      categories.forEach((cat) => {
        const ref = categoryRefs.current[cat];
        if (ref) observer.observe(ref); //IntersectionObserver에 내가 관찰하고 싶은 DOM요소를 등록
      });

      return () => observer.disconnect();
    }, [activeTab, categories]);

    return (
      <>
        <div ref={scrollRef} className={`${styles.storeMenuBox} ${darkMode ? styles.dark_mode : ''}`}>
          {categories.map((cat) => (
            <div
              key={cat}
              ref={(el) => {
                categoryRefs.current[cat] = el;
              }}
              data-category={cat}
              className={styles.categorySection}
            >
              {/* 카테고리별 메뉴들 */}
              {items
                .filter((item) => item.category === cat)
                .map((item, idx) => {
                  const className = [
                    styles.storeMenu,
                    selectedId === item.id ? styles.selected : '',
                    pressedIdx === item.name + idx ? styles.pressed : '',
                  ].join(' ');

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
                          ref={(el) => {
                            imgRef.current[item.id] = el;
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          ))}
        </div>
        {/* StoreButtonBox에 selectedId를 prop으로 전달 */}
        <StoreButtonBox selectedId={selectedId} setCartCount={setCartCount} />
      </>
    );
  },
);

//StoreMenuBox.displayName = 'StoreMenuBox';

export default StoreMenuBox;
