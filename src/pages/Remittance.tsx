import RemittanceLayout from "@/features/Remittance"
import { AccountBoxProps } from "@/features/Remittance/AccountBox";

const Remittance = () => {
  const accountInfo: AccountBoxProps = {
    title: '토스페이',
    balance: 3782000,
    menu: ['송금', '충전', 'ATM'],
  };

  return (
    <>
      <RemittanceLayout userAccount={accountInfo}/>
    </>
  )
};

export default Remittance;