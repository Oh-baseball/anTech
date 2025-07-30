import { ReactNode } from 'react';
import styles from './style.module.scss';

export type ActionButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'neutral';
  disabled?: boolean;
  icon?: ReactNode;
};

const ActionButton = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  icon,
}: ActionButtonProps) => {
  return (
    <button
      className={`${styles.action_button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};

export default ActionButton;
