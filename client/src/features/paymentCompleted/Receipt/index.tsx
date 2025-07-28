import styles from './style.module.scss';

type ReceiptItem = {
  name: string;
  qty: number;
  price: number;
};

type ReceiptProps = {
  open: boolean;
  onClose: () => void;
  storeName: string;
  date: string;
  items: ReceiptItem[];
  total: number;
};

const Receipt = ({ open, onClose, storeName, date, items, total }: ReceiptProps) => {
  if (!open) {
    return <></>;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close_btn} onClick={onClose}>
          &times;
        </button>
        <div className={styles.receipt}>
          <h2>{storeName}</h2>
          <div className={styles.meta}>
            <span>영수증</span>
            <span>{date}</span>
          </div>
          <div className={styles.line} />
          {/* 기준 */}
          <div className={styles.item_header}>
            <span>상품명</span>
            <span>수량</span>
            <span>금액</span>
          </div>
          {items.map((item, idx) => (
            <div className={styles.item} key={idx}>
              <span>{item.name}</span>
              <span>{item.qty}</span>
              <span>{(item.price * item.qty).toLocaleString()}원</span>
            </div>
          ))}
          <div className={styles.line} />
          <div className={styles.total_row}>
            <span>합계</span>
            <span>{total.toLocaleString()}원</span>
          </div>
          <div className={styles.thanks}>이용해주셔서 감사합니다!</div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
