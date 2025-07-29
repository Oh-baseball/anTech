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
    className={`${styles.skeleton_container} ${
      expanded ? styles.skeleton_expanded : styles.skeleton_collapsed
    }`}
    onTransitionEnd={onTransitionEnd}
  >
    <div className={styles.line}></div>
    <div className={styles.skeleton_title} />
    <div className={styles.skeleton_row_group}>
      <div className={styles.skeleton_label} />
      <div className={styles.skeleton_text_short} />
    </div>
    <div className={styles.skeleton_row_group}>
      <div className={styles.skeleton_label} />
      <div className={styles.skeleton_text_full} />
    </div>
    <div className={styles.skeleton_row_double}>
      <div className={styles.skeleton_block} />
      <div className={styles.skeleton_block} />
    </div>
    <div className={styles.skeleton_button} />

    <div className={styles.line}></div>
    <div className={styles.skeleton_title} />
    <div className={styles.skeleton_row_group}>
      <div className={styles.skeleton_label} />
      <div className={styles.skeleton_text_short} />
    </div>
    <div className={styles.skeleton_row_group}>
      <div className={styles.skeleton_label} />
      <div className={styles.skeleton_text_full} />
    </div>
    <div className={styles.skeleton_row_double}>
      <div className={styles.skeleton_block} />
      <div className={styles.skeleton_block} />
    </div>
    <div className={styles.skeleton_button} />
  </div>
);

export default ReceiptSkeleton;
