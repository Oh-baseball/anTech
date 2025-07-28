import ActionButton from '@/components/ActionButton';
import styles from './style.module.scss';

type ButtonConatinerProps = {
  showButtons: boolean;
  handleClickReceipt: () => void;
  handleClickComplete: () => void;
};

const ButtonContainer = ({
  showButtons,
  handleClickReceipt,
  handleClickComplete,
}: ButtonConatinerProps) => {
  return (
    <div className={`${styles.button_container} ${showButtons && styles.show}`}>
      <div>
        <ActionButton label="영수증 보기" variant="neutral" onClick={handleClickReceipt} />
      </div>
      <div>
        <ActionButton label="완료" onClick={handleClickComplete} />
      </div>
    </div>
  );
};

export default ButtonContainer;
