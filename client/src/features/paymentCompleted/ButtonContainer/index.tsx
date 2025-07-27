import ActionButton from '@/components/ActionButton';
import styles from './style.module.scss';

const ButtonContainer = ({ showButtons }: { showButtons: boolean }) => {
  return (
    <div className={`${styles.button_container} ${showButtons && styles.show}`}>
      <div>
        <ActionButton label="영수증 보기" variant="neutral" onClick={() => null} />
      </div>
      <div>
        <ActionButton label="완료" onClick={() => null} />
      </div>
    </div>
  );
};

export default ButtonContainer;
