import Header from '@/components/Header';
import styles from './paymentConfirm.module.scss';
import PaymentAmount from './PaymentAmount';
import PaymentInfoList from './PaymentInfoList';
import CancelButton from '@/components/CancelButton';
import ActionButton from '@/components/ActionButton';

const PaymentConfirmContainer = () => (
  <>
    <Header prevBtn title="결제하기" right={<CancelButton />} />
    <div className={styles.container}>
      <section className={styles.confirm_box}>
        <PaymentAmount amount={9000} />
        <PaymentInfoList />
      </section>

      <ActionButton label="14,000원 결제하기" onClick={() => null} />
    </div>
  </>
);

export default PaymentConfirmContainer;
