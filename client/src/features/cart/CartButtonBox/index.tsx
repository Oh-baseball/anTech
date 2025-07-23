import CartButton from '../CartButton';
import styles from './style.module.scss';

const CartButtonBox = () => {

  return (
    <div className={styles.storeButtonBox}>
      <CartButton/>
    </div>
  );
};

export default CartButtonBox;