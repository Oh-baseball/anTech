import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './paymentCompletedContainer.module.scss';
import Card from './Card';

gsap.registerPlugin(ScrollToPlugin);

const PaymentCompletedContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starBgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = containerRef.current ? containerRef.current.scrollTop : 0;
      if (starBgRef.current) {
        starBgRef.current.style.transform = `translateY(${-scroll / 3}px)`;
      }
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${scroll / 1.7}px)`;
      }
    };
    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener('scroll', handleScroll);
    }

    if (titleRef.current) {
      const divs = titleRef.current.querySelectorAll('div');
      divs.forEach((div) => {
        gsap.from(div, {
          autoAlpha: 0,
          delay: Math.random() * 1,
          duration: 1,
          ease: 'power3.easeInOut',
        });
      });
    }

    const bottomEl = bottomRef.current;
    if (bottomEl) {
      gsap.to(containerEl, {
        scrollTo: { y: bottomEl },
        delay: 1.7,
        duration: 2,
        ease: 'power4.inOut',
      });

      gsap.from(bottomEl, {
        scale: 0.7,
        y: 100,
        delay: 2.2,
        duration: 2.5,
        ease: 'power3.inOut',
      });
    }

    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotationY: 360,
        duration: 1,
        ease: 'out',
        delay: 3.8,
      });
    }

    return () => {
      if (containerEl) {
        containerEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.starBg} ref={starBgRef}></div>
      <section className={`${styles.top} ${styles.section_container}`}>
        <h1 className={styles.title} ref={titleRef}>
          <div>결</div>
          <div>제</div>
          <div>를</div>
          <div>&nbsp;</div>
          <div>진</div>
          <div>행</div>
          <div>합</div>
          <div>니</div>
          <div>다</div>
        </h1>
      </section>
      <section className={`${styles.bottom} ${styles.section_container}`} ref={bottomRef}>
        <div className={styles.contWrap}>
          <Card ref={cardRef} />
          <h2>결제가 완료되었습니다.</h2>
        </div>
      </section>
    </div>
  );
};

export default PaymentCompletedContainer;
