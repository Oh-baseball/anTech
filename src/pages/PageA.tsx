import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageA.module.scss';

const PageA = () => {
  return (
    <div className={styles.page}>
      <div id="sharedElement" className={styles.sharedElement} style={{ viewTransitionName: "shared-elem" }}>
        공유 요소
      </div>
      <p className={styles.desc}>이곳은 페이지 A입니다.</p>
      {/* viewTransition prop으로 트랜지션 활성화 */}
      <Link className={styles.pageBtn} to="/pageB" viewTransition>
        페이지 B로 이동
      </Link>
    </div>
  )
};

export default PageA