import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import ReceiptSkeleton from '../ReceiptSkeleton';
import useUserStore from '@/store/useUserStore';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { Order } from '@/types/order';
import { usePaymentMethod } from '@/hooks/queries/usePaymentMethod';

interface ReceiptProps {
  open: boolean;
  onClose: () => void;
}

const Receipt = ({ open, onClose }: ReceiptProps) => {
  const [expanded, setExpanded] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const skeletonRef = useRef<HTMLDivElement>(null);

  const userId = useUserStore((state) => state.userId);
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const methodId = searchParams.get('methodId');

  const queryClient = useQueryClient();
  const orderData = queryClient.getQueryData<Order>(['order', orderId]);
  const { paymentMethod, isPending } = usePaymentMethod({ userId, methodId });

  useEffect(() => {
    console.log('paymentMethod', paymentMethod);
    console.log('orderData', orderData);
  }, [paymentMethod, orderData]);

  useEffect(() => {
    if (open) {
      setExpanded(false);
      setContentReady(false);

      const timer = setTimeout(() => setExpanded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleTransitionEnd = () => {
    if (expanded && !contentReady) {
      setTimeout(() => setContentReady(true), 300);
    }
  };

  const formatTimestamp = (input: string | undefined) => {
    if (!input) return '';

    const trimmed = input.split('.')[0]; // 밀리초 제거
    return trimmed.replace('T', ' ');
  };

  if (!open || isPending) {
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
          <ReceiptSkeleton
            expanded={expanded}
            skeletonRef={skeletonRef}
            onTransitionEnd={handleTransitionEnd}
          />
        )}
        {contentReady && (
          <div className={expanded ? styles.expandingContent : styles.contractingContent}>
            <div className={styles.line}></div>
            <div className={styles.infoTable}>
              <div>
                <span>식별번호</span>
                {paymentMethod?.masked_number || ''}
              </div>
              <div>
                <span>용도</span>소득공제용
              </div>
              <div>
                <span>국세청 승인번호</span>983267433343
              </div>
            </div>
            <div className={styles.infoTable} style={{ marginTop: '3px' }}>
              <div>
                <span>구매자</span>진종환
              </div>
              <div>
                <span>구매상품</span>
                {orderData?.items[0].menu_name || ''}
              </div>
              <div>
                <span>주문번호</span>
                {orderId || ''}
              </div>
              <div>
                <span>구매/환불일시</span>
                {formatTimestamp(orderData?.created_at)}
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.amountTable}>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>구매내역</div>
              {Array.isArray(orderData?.items) &&
                orderData.items.map((item) => (
                  <div key={item.menu_id ?? item.menu_name}>
                    <span>
                      {item.menu_name} × {item.quantity}
                    </span>
                    <span>{item.unit_price.toLocaleString()}원</span>
                  </div>
                ))}

              {/* <div>
                <span>볼펜세트 × 1</span>
                <span>15,000원</span>
              </div>
              <div>
                <span>노트북 × 1</span>
                <span>220,000원</span>
              </div> */}
            </div>
            <div className={styles.amountTable}>
              <div>
                <span>공급가액</span>
                {(isNaN(Number(orderData?.final_amount) * 0.9)
                  ? 0
                  : Number(orderData?.final_amount) * 0.9
                ).toLocaleString() || 0}
                원
              </div>
              <div>
                <span>부가세</span>
                {(isNaN(Number(orderData?.final_amount) * 0.1)
                  ? 0
                  : Number(orderData?.final_amount) * 0.1
                ).toLocaleString() || 0}
                원
              </div>
              <div className={styles.amountTotal}>
                <span>합계</span>
                {orderData?.final_amount.toLocaleString() || 0}원
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
