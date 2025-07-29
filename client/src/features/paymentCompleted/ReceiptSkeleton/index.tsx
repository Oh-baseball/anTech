import React from 'react';
import styles from './style.module.scss';

interface ReceiptSkeletonProps {
  expanded: boolean;
  skeletonRef?: React.RefObject<HTMLDivElement | null>;
  onTransitionEnd?: () => void;
}

const ReceiptSkeleton = ({ expanded, skeletonRef, onTransitionEnd }: ReceiptSkeletonProps) => (
  <div
    ref={skeletonRef}
    className={`${styles.skeletonContainer} ${
      expanded ? styles.skeletonExpanded : styles.skeletonCollapsed
    }`}
    onTransitionEnd={onTransitionEnd}
  >
    <div className={styles.line}></div>
    <div className={styles.skeletonTitle} />

    {/* label + short text */}
    <div className={styles.skeletonRowGroup}>
      <div className={styles.skeletonLabel} />
      <div className={styles.skeletonTextShort} />
    </div>

    {/* label + full width text */}
    <div className={styles.skeletonRowGroup}>
      <div className={styles.skeletonLabel} />
      <div className={styles.skeletonTextFull} />
    </div>

    {/* two-column layout (like 가격 + 수량) */}
    <div className={styles.skeletonRowDouble}>
      <div className={styles.skeletonBlock} />
      <div className={styles.skeletonBlock} />
    </div>

    {/* button placeholder */}
    <div className={styles.skeletonButton} />
    <div className={styles.line}></div>

    <div className={styles.skeletonTitle} />

    <div className={styles.skeletonRowGroup}>
      <div className={styles.skeletonLabel} />
      <div className={styles.skeletonTextShort} />
    </div>

    <div className={styles.skeletonRowGroup}>
      <div className={styles.skeletonLabel} />
      <div className={styles.skeletonTextFull} />
    </div>

    <div className={styles.skeletonRowDouble}>
      <div className={styles.skeletonBlock} />
      <div className={styles.skeletonBlock} />
    </div>

    <div className={styles.skeletonButton} />
  </div>
);

export default ReceiptSkeleton;
