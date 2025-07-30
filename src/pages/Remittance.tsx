import { AccountBoxProps } from "@/features/Home/AccountBox";
import RemittanceLayout from "@/features/Remittance"

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