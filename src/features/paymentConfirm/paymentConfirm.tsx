import Header from '@/components/Header';
import cancelIcon from '@/assets/cancel.svg';
import styles from './paymentConfirm.module.scss';

const cancel = () => {
  return <img src={cancelIcon} alt="" />;
};

const PaymentConfirmContainer = () => {
  return (
    <>
      <Header prevBtn title="결제하기" right={cancel()} />
      <div className={styles.container}>
        <section className={styles.confirmBox}>
          <div className={styles.amountSection}>
            <span className={styles.label}>결제할 금액</span>
            <span className={styles.amount}>9,000원</span>
          </div>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoLabel}>결제수단</span>
              <span className={styles.infoValue}>토스뱅크 통장 (***1234)</span>
            </li>
            <li>
              <span className={styles.infoLabel}>상품명</span>
              <span className={styles.infoValue}>스타벅스 아메리카노 외 1건</span>
            </li>
            <li>
              <span className={styles.infoLabel}>주문금액</span>
              <span className={styles.infoValue}>9,500원</span>
            </li>
            <li>
              <span className={styles.infoLabel}>할인혜택</span>
              <span className={styles.discount}>-500원</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default PaymentConfirmContainer;

// import Header from '@/components/Header';
// import styles from './paymentConfirm.module.scss';
// import PaymentAmount from './PaymentAmount';
// import PaymentInfoList from './PaymentInfoList';
// import CancelButton from '@/components/CancelButton';

// const PaymentConfirmContainer = () => (
//   <>
//     <Header prevBtn title="결제하기" right={<CancelButton />} />
//     <div className={styles.container}>
//       <section className={styles.confirmBox}>
//         <PaymentAmount amount={9000} />
//         <PaymentInfoList />
//       </section>
//     </div>
//   </>
// );

// export default PaymentConfirmContainer;
