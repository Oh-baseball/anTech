import Header from '@/components/Header';
import cancelIcon from '@/assets/cancel.svg';

const cancel = () => {
  return <img src={cancelIcon} alt="" />;
};

const PaymentConfirm = () => {
  return (
    <div>
      <Header prevBtn title="결제하기" right={cancel()} />
    </div>
  );
};

export default PaymentConfirm;
