import ChargeLayout from '@/features/Charge';
import { AccountBoxProps } from '@/features/Charge/AccountBox';

const Charge = () => {
  const accountInfo: AccountBoxProps = {
    title: '토스페이',
    balance: 3782000,
    menu: ['송금', '충전', 'ATM'],
  };
  return <div><ChargeLayout userAccount={accountInfo}/></div>
};

export default Charge