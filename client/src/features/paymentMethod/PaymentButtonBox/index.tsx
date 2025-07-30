// import { useNavigate } from "react-router-dom";
import styles from './style.module.scss';
import PaymentButton from "../PaymentButton"

const PaymentButtonBox = ({amount} : {amount: number}) => {
    // const navigate = useNavigate();

    const handleNav = () => {
        window.location.replace('/payment/confirm') 
    }

    return(
        <div className={styles.paymentButtonBox}>
            <PaymentButton 
                PaymentButtonItem={{ amount }}
                onClick={handleNav}
            />
        </div>
    );
};

export default PaymentButtonBox;