import style from './style.module.scss';

const PaymentTitle = ({title}:{title: string}) => {
    return <p className={style.payment_title}>{title}</p>
}

export default PaymentTitle;