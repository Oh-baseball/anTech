import Header from '@/components/Header';
import styles from './paymentConfirm.module.scss';
import PaymentAmount from './PaymentAmount';
import PaymentInfoList from './PaymentInfoList';
import CancelButton from '@/components/CancelButton';

const PaymentConfirmContainer = () => (
  <>
    <Header prevBtn title="결제하기" right={<CancelButton />} />
    <div className={styles.container}>
      <section className={styles.confirmBox}>
        <PaymentAmount amount={9000} />
        <PaymentInfoList />
      </section>
    </div>
  </>
);

export default PaymentConfirmContainer;
