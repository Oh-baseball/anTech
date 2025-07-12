import cancelIcon from '@/assets/cancel.svg';

const CancelButton = ({ onClick }: { onClick?: () => void }) => (
  <img src={cancelIcon} alt="취소" onClick={onClick} style={{ cursor: 'pointer' }} />
);

export default CancelButton;
