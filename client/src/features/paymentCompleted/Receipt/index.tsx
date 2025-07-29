import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

interface ReceiptProps {
  open: boolean;
  onClose: () => void;
}

const Receipt = ({ open, onClose }: ReceiptProps) => {
  const [expanded, setExpanded] = useState(false);
  const [contentReady, setContentReady] = useState(false); // 실제 내용 표시 여부
  const skeletonRef = useRef<HTMLDivElement>(null);

  // 모달 열리면 자동으로 펼침 시작
  useEffect(() => {
    if (open) {
      setExpanded(false);
      setContentReady(false);
      // 최초 마운트 후 100ms 뒤에 펼치기 (애니메이션 시간상 조정)
      const timer = setTimeout(() => setExpanded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // 애니메이션 종료 시 실제 내용으로 전환
  const handleTransitionEnd = () => {
    if (expanded && !contentReady) setContentReady(true);
  };

  if (!open) {
    return <></>;
  }

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${styles.shimmer_effect}`}>
        <button className={styles.close_btn} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>영수증</h2>
        <div className={styles.metaRow}>
          <span>거래일 2025-07-28 16:12:23</span>
          <span>발급완료</span>
        </div>
        {!contentReady && (
          <div
            ref={skeletonRef}
            className={`${styles.skeletonContainer} ${expanded ? styles.skeletonExpanded : styles.skeletonCollapsed}`}
            onTransitionEnd={handleTransitionEnd}
            style={{ overflow: 'hidden', marginBottom: 16 }}
          >
            <div className={styles.skeletonRow} />
            <div className={styles.skeletonRow} />
          </div>
        )}

        {contentReady && (
          <div className={expanded ? styles.expandingContent : styles.contractingContent}>
            <div className={styles.line}></div>
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
            <div className={styles.line}></div>
            <div className={styles.amountTable}>
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
        )}
      </div>
    </div>
  );
};

export default Receipt;
