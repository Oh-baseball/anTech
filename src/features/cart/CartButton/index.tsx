import styles from './style.module.scss';

export interface CartButtonItem {
  amount: number;
}

interface CartButtonProps {
  CartButtonItem?: CartButtonItem; // ?로 옵셔널 처리
}

const dummyData: CartButtonItem = {
  amount: 14000
};

const CartButton = ({ CartButtonItem }: CartButtonProps) => {
  const data = CartButtonItem ?? dummyData;

  return (
    <button className={styles.cartButton}>💳 {data.amount.toLocaleString()}원 결제하기</button>
  );
};

export default CartButton;