import { useRef, useEffect, useState } from 'react';
import styles from './style.module.scss';
import CartTotalBox from '../CartTotalBox';

const CartBox = ({ items, onIncrease, onDecrease }) => {
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
                  <button onClick={() => onDecrease(idx)}>-</button>
                  {boxItem.count}
                  <button onClick={() => onIncrease(idx)}>+</button>
                </div>
              </div>
              <div className={styles.right_items}>
                <img src={boxItem.img} alt={boxItem.name} />
              </div>
            </div>
          ))}
        </div>
        <CartTotalBox items={items} />
      </div>
    </>
  );
};

export default CartBox;
