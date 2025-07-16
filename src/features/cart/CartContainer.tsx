import CartBox from "@/features/cart/CartBox";
import MobileWrapper from "@/components/MobileWrapper";
import StoreInfoBox from "@/features/products/StoreInfoBox";
import CartButtonBox from "./CartButtonBox";
import CartTotalBox from "./CartTotalBox";
import Header from "@/components/Header";

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

const CartContainer = () => {
  return (
    <>
    <MobileWrapper>
      <Header 
        prevBtn={true}
        title="장바구니"
        right={<button style={{ fontSize: '14px', color: '#666' }}>전체삭제</button>}
      />
      <StoreInfoBox/>
      <CartBox CartBoxItmes={dummyCartBoxItems}/>
      <CartButtonBox/>
    </MobileWrapper>
    </>
  );
};

export default CartContainer;
