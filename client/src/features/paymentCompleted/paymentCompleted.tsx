import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './paymentCompletedContainer.module.scss';
import Card from './Card';
import VisualTag from './VisualTag';
import Coin from '@/components/Coin';

gsap.registerPlugin(ScrollToPlugin);
const FALLING_COIN_COUNT = 50;

const initialPositions = [
  { x: -200, y: 0 },
  { x: 0, y: 1000 },
  { x: 200, y: 0 },
];

const PaymentCompletedContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starBgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const tossPayTagRef = useRef<HTMLDivElement>(null);
  const hereTagRef = useRef<HTMLDivElement>(null);
  const thxTagRef = useRef<HTMLDivElement>(null);

  const coinRefs = useRef<HTMLDivElement[]>([]);
  const fixedCoinRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [showFallingCoins, setShowFallingCoins] = useState(false);

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
        ease: 'power1.out',
        delay: 3.8,
        onComplete: () => {
          if (tossPayTagRef.current) {
            setShowFallingCoins(true);
            gsap.fromTo(
              tossPayTagRef.current,
              {
                scale: 0,
                transformPerspective: 800,
                transformOrigin: '22% calc(100% + 15px)',
              },
              {
                delay: 0.3,
                duration: 1.8,
                scale: 1,
                ease: 'power3.out',
                keyframes: [
                  { rotateZ: -15, duration: 0.3 },
                  { rotateZ: 30, duration: 0.6 },
                  { rotateZ: -15, duration: 0.3 },
                  { rotateZ: 15, duration: 0.3 },
                ],
                onComplete: () => {
                  if (hereTagRef.current && thxTagRef.current) {
                    const hereTagEl = hereTagRef.current;
                    gsap.to(hereTagEl, {
                      duration: 0.5,
                      scale: 1,
                    });

                    const thxTagEl = thxTagRef.current;
                    gsap.to(thxTagEl, {
                      duration: 0.5,
                      scale: 1,
                    });
                  }
                },
              },
            );
          }
        },
      });

      fixedCoinRefs.current.forEach((el, idx) => {
        if (!el) return;

        const startPos = initialPositions[idx];
        const midPos = {
          x: startPos.x * 0.5,
          y: idx === 0 ? -180 : idx === 1 ? 180 : 0,
        };
        const endPos = { x: 0, y: 0, z: 0 };

        gsap.set(el, { x: startPos.x, y: startPos.y });

        gsap
          .timeline({ delay: 5 + idx * 0.2 })
          .to(el, {
            duration: 0.7,
            x: midPos.x,
            y: midPos.y,
            ease: 'power2.in',
          })
          .to(el, {
            duration: 0.6,
            x: endPos.x,
            y: endPos.y,
            z: endPos.z,
            rotationY: 360,
            ease: 'power2.out',
          });
      });

      return () => {
        if (containerEl) {
          containerEl.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (showFallingCoins && bottomRef.current && containerRef.current) {
      const dvw = containerRef.current.offsetWidth;
      coinRefs.current.forEach((coinEl, i) => {
        if (!coinEl) return;
        const coin = coinEl.firstElementChild;

        const randomX = (Math.random() - 0.5) * dvw * 2;
        const randomScale = 0.5 + Math.random() * 0.5;
        const randomRotationX = (Math.random() - 0.5) * 90;
        const randomRotationY = (Math.random() - 0.5) * 360;
        const randomRotationZ = (Math.random() - 0.5) * 720;

        if (coin) {
          gsap.set(coin, { rotationX: 0, rotationY: 0, rotationZ: 0 });
          gsap.to(coin, {
            duration: 5,
            rotationX: randomRotationX * 6,
            rotationY: randomRotationY * 10,
            rotationZ: randomRotationZ * 6,
          });
        }

        gsap.set(coinEl, {
          y: -1500,
          x: 0,
          position: 'absolute',
          scale: 0.3 * randomScale,
        });

        gsap.to(coinEl, {
          duration: 2,
          y: 0,
          x: randomX,
          ease: 'linear',
          delay: (i % 10) * 0.15,
          onComplete: () => {},
        });
      });
    }
  }, [showFallingCoins]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.star_bg} ref={starBgRef}></div>
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
        <div className={styles.cont_wrap}>
          <div className={styles.card_wrap}>
            {showFallingCoins &&
              Array.from({ length: FALLING_COIN_COUNT }).map((_, i) => (
                <div
                  key={`fallingCoin_${i}`}
                  ref={(el) => {
                    if (el) {
                      coinRefs.current[i] = el;
                    }
                  }}
                  className={styles.fallingCoin}
                  style={{
                    bottom: -300,
                    pointerEvents: 'none',
                    position: 'absolute',
                  }}
                >
                  <Coin zIndex={100} />
                </div>
              ))}
            <VisualTag variant="toss_pay" ref={tossPayTagRef} />
            <VisualTag variant="here" ref={hereTagRef} />
            <VisualTag variant="thx" ref={thxTagRef} />
            <Card ref={cardRef} />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${styles.coin_wrapper} ${styles[`coin_wrapper--${['first', 'second', 'third'][i]}`]}`}
                ref={(el) => {
                  fixedCoinRefs.current[i] = el;
                }}
              >
                <Coin scale={0.3} zIndex={300} />
              </div>
            ))}
          </div>
        </div>
        <h2>결제가 완료되었습니다.</h2>
      </section>
    </div>
  );
};

export default PaymentCompletedContainer;
