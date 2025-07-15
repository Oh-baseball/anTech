import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageB.module.scss';

const PageB = () => {
  return (
    <div className={styles.page}>
    {/* 같은 id를 갖는 공유 요소 */}
    <div
      id="sharedElement"
      className={styles.sharedElement}
      style={{ viewTransitionName: "shared-elem", width: 180, height: 120, background: '#ffe14a', color: '#222' }}
    >
      공유 요소
    </div>
    <p className={styles.desc}>이곳은 페이지 B입니다.</p>
    <Link className={styles.pageBtn} to="/pageA" viewTransition>
      페이지 A로 이동
    </Link>
  </div>
  )
};

export default PageB