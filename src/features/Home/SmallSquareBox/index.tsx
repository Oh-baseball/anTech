import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

export interface SmallSquareBoxItem {
  img?: string;
  title: string;
  content?: string;
}

interface SmallSquareBoxProps {
  SmallSquareBoxItems: SmallSquareBoxItem[];
}

const SmallSquareBox = ({SmallSquareBoxItems}: SmallSquareBoxProps) => {
  const navigate = useNavigate();

  const paymentNav = () => (
    navigate('/products', {viewTransition: true})
  );

  return (
  <>
    {SmallSquareBoxItems.map((boxItem, idx) => (
      <button key={idx} className={styles.smallSquareBox} onClick={paymentNav}>
        <div>
          <img src={boxItem.img}/>
        </div>
        <div className={styles.bottom_items}>
          <p>{boxItem.title}</p>
          <div>
            <p>{boxItem.content}</p>
          </div>
        </div>
      </button>
    ))}
  </>
  )
};

export default SmallSquareBox