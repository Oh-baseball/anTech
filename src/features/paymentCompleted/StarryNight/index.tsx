import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

type StarryNightProps = {
  scrollY?: number;
};

const STAR_COUNTS = {
  upper: { sm: 100, md: 20, lg: 4 },
  lower: { sm: 50, md: 10, lg: 2 },
};

function getRandom(leftMax: number, topMax: number) {
  return {
    left: Math.round(Math.random() * leftMax),
    top: Math.round((Math.random() - 0.3) * topMax),
  };
}

const StarryNight = ({ scrollY = 0 }: StarryNightProps) => {
  const upperRef = useRef<HTMLDivElement>(null);
  const lowerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const upperH = Math.round(winH);
    const lowerH = Math.round(winH);

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

    appendStars(upperRef.current, STAR_COUNTS.upper.sm, 'star_sm', 'star_md', 'star_lg');
    appendStars(lowerRef.current, STAR_COUNTS.lower.sm, 'star_sm', 'star_md', 'star_lg');

    document.getElementById(styles.cover)?.classList.add(styles.loaded);
  }, []);

  useEffect(() => {
    if (coverRef.current) {
      coverRef.current.style.transform = `translateY(${-scrollY / 3}px)`; // 속도 조절 가능
    }
  }, [scrollY]);

  return (
    <div className={styles.cover} id={styles.cover} ref={coverRef}>
      <div className={styles.upper} ref={upperRef}></div>
      <div className={styles.lower} ref={lowerRef}></div>
    </div>
  );
};

export default StarryNight;
