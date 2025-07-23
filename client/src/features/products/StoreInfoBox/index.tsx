import styles from './style.module.scss';

export interface StoreInfoBoxItem {
  img: string;
  name: string;
  address: string;
}

interface StoreInfoBoxProps {
  StoreInfoBoxItem?: StoreInfoBoxItem; // ?로 옵셔널 처리
}

const dummyData: StoreInfoBoxItem = {
  img: "https://i.namu.wiki/i/eD5ENNNkE_YkPJcXYYW4ZBH8B6xg5EGbba3rhLjRU5yXJB79AJdRY7ppnQozazY9fqnSPEbB0ne7Lu-PG_CuMMesIZJy0QpPXygqtCzkVz321fvaJaGyUxRWPR_QaZiC1bZpOcEtxdZb-kSG1Ilr6A.webp",
  name: "스타벅스 강남점",
  address: "서울 강남구 테헤란로 152",
};

const StoreInfoBox = ({ StoreInfoBoxItem }: StoreInfoBoxProps) => {
  const data = StoreInfoBoxItem ?? dummyData;
  return (
    <div className={styles.storeInfoBox}>
      <div className={styles.left_items}>
        <p>{data.name}</p>
        <p>{data.address}</p>
      </div>
      <div className={styles.right_items}>
        <img src={data.img} alt="매장 이미지"/>
      </div>
    </div>
  );
};

export default StoreInfoBox;