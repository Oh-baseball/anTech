import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const STAR_COUNTS = {
  upper: { sm: 300, md: 60, lg: 12 },
  lower: { sm: 150, md: 30, lg: 6 },
};

function getRandom(leftMax: number, topMax: number) {
  return {
    left: Math.round(Math.random() * leftMax),
    top: Math.round(Math.random() * topMax),
  };
}

const StarryNight = () => {
  const upperRef = useRef<HTMLDivElement>(null);
  const lowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const upperH = Math.round(winH / 2);
    const lowerH = Math.round(winH / 2);

    function appendStars(
      container: HTMLDivElement | null,
      count: number,
      smName: string,
      mdName: string,
      lgName: string,
    ) {
      if (!container) {
        return;
      }

      for (let i = 0; i < count; i++) {
        const { left, top } = getRandom(winW, smName === 'star-sm' ? upperH : lowerH);

        const sm = document.createElement('div');
        sm.className = styles[smName];
        sm.style.top = top + 'px';
        sm.style.left = left + 'px';
        container.appendChild(sm);

        if (i % 5 === 0) {
          const md = document.createElement('div');
          md.className = styles[mdName];
          md.style.top = top + 'px';
          md.style.left = left + 'px';
          container.appendChild(md);
        } else if (i % 25 === 0) {
          const lg = document.createElement('div');
          lg.className = styles[lgName];
          lg.style.top = top + 'px';
          lg.style.left = left + 'px';
          container.appendChild(lg);
        }
      }
    }

    if (upperRef.current) upperRef.current.innerHTML = '';
    if (lowerRef.current) lowerRef.current.innerHTML = '';

    appendStars(upperRef.current, STAR_COUNTS.upper.sm, 'starSm', 'starMd', 'starLg');
    appendStars(lowerRef.current, STAR_COUNTS.lower.sm, 'starSm', 'starMd', 'starLg');

    document.getElementById(styles.cover)?.classList.add(styles.loaded);
  }, []);

  return (
    <div className={styles.cover} id={styles.cover}>
      <div className={styles.upper} ref={upperRef}></div>
      <div className={styles.lower} ref={lowerRef}></div>
    </div>
  );
};

export default StarryNight;
