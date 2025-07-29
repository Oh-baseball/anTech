import styles from './style.module.scss';

const Receipt = () => {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${styles.shimmer_effect}`}>
        <button className={styles.close_btn} onClick={() => {}}>
          &times;
        </button>
        <h2 className={styles.title}>영수증</h2>

        <div className={styles.metaRow}>
          <span>거래일 2025-07-28 16:12:23</span>
          <span>발급완료</span>
        </div>

        <div className={styles.infoTable}>
          <div>
            <span>식별번호</span>010-****-9435
          </div>
          <div>
            <span>용도</span>소득공제용
          </div>
          <div>
            <span>국세청 승인번호</span>983267433343
          </div>
          <div>
            <span>사용처</span>도서문화
          </div>
        </div>

        <div className={styles.infoTable}>
          <div>
            <span>구매자</span>김씨네문방구
          </div>
          <div>
            <span>구매상품</span>후드티
          </div>
          <div>
            <span>주문번호</span>2391008761
          </div>
          <div>
            <span>입금/환불일시</span>2025-07-28 16:12:23
          </div>
        </div>

        <div className={styles.amountTable} style={{ marginTop: '16px' }}>
          <div style={{ fontWeight: 600, marginBottom: '6px' }}>구매내역</div>
          <div>
            <span>후드티 × 2</span>
            <span>110,000원</span>
          </div>
          <div>
            <span>볼펜세트 × 1</span>
            <span>15,000원</span>
          </div>
          <div>
            <span>노트북 × 1</span>
            <span>220,000원</span>
          </div>
        </div>

        <div className={styles.amountTable}>
          <div>
            <span>공급가액</span>313,637원
          </div>
          <div>
            <span>부가세</span>31,363원
          </div>
          <div>
            <span>봉사료</span>0원
          </div>
          <div className={styles.amountTotal}>
            <span>합계</span>345,000원
          </div>
        </div>

        <div className={styles.shopInfo}>
          <div>이용상점 김씨네문방구 | 대표자명: 김철수 | 사업자등록번호: 129-86-12373</div>
          <div>주소: 서울특별시 중구 필동로 123 1층</div>
        </div>

        <div className={styles.shopInfo}>
          <div>결제서비스 An Pay(주) | 대표자명: 안다빈 | 사업자등록번호: 120-86-11005</div>
          <div>주소: 서울특별시 강남구 테헤란로 431</div>
        </div>

        <div className={styles.notice}>
          ※ 이 영수증은 소득공제 및 연말정산 시 인정됩니다.
          <br />
          ※ 국세청 현금영수증 사이트에서 확인하세요.
          <br />※ 문의: 국번없이 126-1
        </div>
      </div>
    </div>
  );
};

export default Receipt;
