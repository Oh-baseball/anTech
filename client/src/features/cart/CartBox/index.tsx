import { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import CartTotalBox from "../CartTotalBox";

export interface CartBoxItem {
  img: string;
  name: string;
  price: number;
  category: string;
  count: number;
}

interface CartBoxProps {
  CartBoxItmes?: CartBoxItem[];
}

const dummyCartBoxItems = [
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '아메리카노',
    price: 4500,
    category: '커피',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카페라떼',
    price: 5000,
    category: '커피',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카푸치노',
    price: 5500,
    category: '커피',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '아메리카노',
    price: 4500,
    category: '커피',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카페라떼',
    price: 5000,
    category: '커피',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '카푸치노',
    price: 5500,
    category: '커피',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코케이크',
    price: 4500,
    category: '디저트',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기케이크',
    price: 5000,
    category: '디저트',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '생크림케이크',
    price: 5500,
    category: '디저트',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코케이크',
    price: 4500,
    category: '디저트',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기케이크',
    price: 5000,
    category: '디저트',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '생크림케이크',
    price: 5500,
    category: '디저트',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '크림샌드위치',
    price: 5500,
    category: '샌드위치',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코샌드위치',
    price: 4500,
    category: '샌드위치',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기샌드위치',
    price: 5000,
    category: '샌드위치',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '크림샌드위치',
    price: 5500,
    category: '샌드위치',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '초코샌드위치',
    price: 4500,
    category: '샌드위치',
    count: 1
  },
  {
    img: 'https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp',
    name: '딸기샌드위치',
    price: 5000,
    category: '샌드위치',
    count: 1
  }
];


const CartBox = ({ CartBoxItmes }: CartBoxProps) => {
  const [items, setItems] = useState(CartBoxItmes ?? dummyCartBoxItems);

  const handleIncrease = (idx:number)=>{
    setItems(prev=>prev.map((item, i)=>i===idx?{...item, count:item.count+1}:item));
  }

  const handleDecrease = (idx:number)=>{
    setItems(prev=>prev.map((item, i)=>i===idx && item.count>1?{...item, count:item.count-1}:item));
  }

  return (
    <>
    <div className={styles.cartScrollArea}>
      <div className={styles.cartBox}>
      {items.map((boxItem, idx) => (
        <div key={idx} className={styles.cart}>
          <div className={styles.left_items}>
            <p>{boxItem.name}</p>
            <p>{boxItem.price.toLocaleString()}원</p>
            <div className={styles.count}>
              <button onClick={()=>handleDecrease(idx)}>-</button>
              {boxItem.count}
              <button onClick={()=>handleIncrease(idx)}>+</button>
            </div>
          </div>
          <div className={styles.right_items}>
            <img src={boxItem.img} alt={boxItem.name} />
          </div>
        </div>
      ))}
    </div>
    <CartTotalBox items={items}/>
    </div>
    </>
  );
};

export default CartBox;