import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const EDGE_COUNT = 40;

interface CoinProps {
  scale?: number;
  zIndex?: number;
}

const Coin = ({ scale = 1, zIndex = 1 }: CoinProps) => {
  const coinRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const side = sideRef.current;
    if (!side) {
      return;
    }

    side.innerHTML = '';
    side.style.transform = 'translateX(60px) translateY(86px) translateZ(-4px)';
    for (let i = 0; i < EDGE_COUNT; i++) {
      const edge = document.createElement('div');
      edge.className = styles.coin_edge;
      edge.style.height = '24px';
      edge.style.transform = `rotateX(90deg) rotateY(${
        (360 / EDGE_COUNT) * i
      }deg) translateZ(100px) translateY(8px)`;
      edge.style.background = i % 2 ? '#e5c56d' : '#b99845';
      side.appendChild(edge);
    }

    const coin = coinRef.current;
    if (coin) coin.style.transform = 'rotateY(20deg) rotateX(-16deg)';
  }, []);

  useEffect(() => {
    let rotY = 0,
      rotX = 0,
      dragging = false,
      lastX = 0,
      lastY = 0;
    const coin = coinRef.current;

    const pointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const pointerMove = (e: PointerEvent) => {
      if (!dragging) {
        return;
      }
      rotY += (e.clientX - lastX) * 0.8;
      rotX -= (e.clientY - lastY) * 0.6;
      rotX = Math.max(-90, Math.min(90, rotX));
      if (coin) {
        coin.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      }
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const pointerUp = () => {
      dragging = false;
    };

    if (coin) {
      coin.addEventListener('pointerdown', pointerDown);
      window.addEventListener('pointermove', pointerMove);
      window.addEventListener('pointerup', pointerUp);
    }
    return () => {
      if (coin) coin.removeEventListener('pointerdown', pointerDown);
      window.removeEventListener('pointermove', pointerMove);
      window.removeEventListener('pointerup', pointerUp);
    };
  }, []);

  return (
    <div className={styles.coin} style={{ scale, zIndex }} ref={coinRef}>
      <div className={styles.coin_face}>
        <span className={styles.coin_inner}>$</span>
      </div>
      <div className={styles.coin_back}>
        <span className={styles.coin_inner}>$</span>
      </div>
      <div className={styles.coin_side} ref={sideRef}></div>
    </div>
  );
};

export default Coin;
