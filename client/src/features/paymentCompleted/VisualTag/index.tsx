import { forwardRef } from 'react';
import styles from './style.module.scss';

interface VisualTagProps {
  variant: 'toss_pay' | 'here' | 'thx';
}

const variantMap = {
  toss_pay: 'Toss Pay',
  here: 'Here',
  thx: 'Thx!',
};

const VisualTag = forwardRef<HTMLDivElement, VisualTagProps>(({ variant }, ref) => {
  return (
    <div ref={ref} className={`${styles.visual_tag} ${styles[variant]}`}>
      {variantMap[variant]}
    </div>
  );
});

VisualTag.displayName = 'VisualTag';

export default VisualTag;
