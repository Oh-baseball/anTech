import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './paymentCompletedContainer.module.scss';
import Card from './Card';
import VisualTag from './VisualTag';
import Coin from '@/components/Coin';
import ButtonContainer from './ButtonContainer';

gsap.registerPlugin(ScrollToPlugin);
const FALLING_COIN_COUNT = 40;

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
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);

  useEffect(() => {
    if (isPaymentComplete) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setShowButtons(false);
    }
  }, [isPaymentComplete]);

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

        const randomX = (Math.random() - 0.15) * dvw * 1.3;
        const randomScale = 0.5 + Math.random() * 0.5;
        const randomRotationX = (Math.random() - 0.5) * 180;
        const randomRotationY = (Math.random() - 0.5) * 360;
        const randomRotationZ = (Math.random() - 0.5) * 720;

        if (coin) {
          gsap.set(coin, { rotationX: 0, rotationY: 0, rotationZ: 0 });
          gsap.to(coin, {
            duration: 7,
            rotationX: randomRotationX * 8,
            rotationY: randomRotationY * 14,
            rotationZ: randomRotationZ * 8,
          });
        }

        gsap.set(coinEl, {
          y: -2300,
          x: 0,
          position: 'absolute',
          scale: 0.3 * randomScale,
        });

        gsap.to(coinEl, {
          duration: 3.3,
          y: 0,
          x: randomX,
          ease: 'linear',
          delay: (i % 10) * 0.2,
          onComplete: () => {
            if (i === coinRefs.current.length - 1) {
              setIsPaymentComplete(true);
            }
          },
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
              <Coin />
            </div>
          ))}
        <div className={styles.cont_wrap}>
          <div className={styles.card_wrap}>
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
                <Coin scale={0.3} x={-20 + 10 * i} y={20 + 10 * i} />
              </div>
            ))}
          </div>
        </div>
        {isPaymentComplete && (
          <h2
            className={`${styles.payment_complete_message} ${isPaymentComplete ? styles.show : ''}`}
          >
            결제가 완료되었습니다.
          </h2>
        )}
      </section>
      {isPaymentComplete && (
        <ButtonContainer
          showButtons={showButtons}
          handleClickReceipt={() => setReceiptOpen(!receiptOpen)}
          handleClickComplete={() => null}
        />
      )}
      {/* <Receipt
      // open={receiptOpen}
      // onClose={() => setReceiptOpen(false)}
      // storeName="야무진상점"
      // date="2025-07-28 13:00"
      // items={[
      //   { name: '스타벅스 아메리카노', qty: 3, price: 1200 },
      //   { name: '우유', qty: 1, price: 2200 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '아메리카노', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      //   { name: '빵', qty: 2, price: 1500 },
      // ]}
      // total={8800}
      /> */}
    </div>
  );
};

export default PaymentCompletedContainer;
