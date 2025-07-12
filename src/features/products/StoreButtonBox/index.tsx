import StoreButton from '../StoreButton';
import styles from './style.module.scss';

const StoreButtonBox = () => {

  return (
    <div className={styles.storeButtonBox}>
      <StoreButton StoreButtonItem={{name:"장바구니 담기"}}/>
      <StoreButton StoreButtonItem={{name:"바로 결제하기"}}/>
    </div>
  );
};

export default StoreButtonBox;