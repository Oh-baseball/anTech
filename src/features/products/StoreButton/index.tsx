import styles from './style.module.scss';

export interface StoreButtonItem {
  name: string;
}

interface StoreButtonProps {
  StoreButtonItem?: StoreButtonItem; // ?로 옵셔널 처리
}

const dummyData: StoreButtonItem = {
  name:"장바구니 담기"
};

const StoreButton = ({ StoreButtonItem }: StoreButtonProps) => {
  const data = StoreButtonItem ?? dummyData;

  const buttonType = data.name === "바로 결제하기" ? styles.pay: styles.cart;

  return (
    <button className={`${styles.storeButton} ${buttonType}`}>{data.name}</button>
  );
};

export default StoreButton;