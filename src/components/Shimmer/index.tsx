import React from 'react';
import styles from './style.module.scss';

type ShimmerProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
};

const Shimmer = ({
  width = '100%',
  height = '1.5rem',
  borderRadius = '8px',
  style,
}: ShimmerProps) => (
  <div
    className={styles.shimmer}
    style={{
      width,
      height,
      borderRadius,
      ...style,
    }}
  />
);

export default Shimmer;
