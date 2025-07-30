import useDarkModeStore from '@/store/useDarkModeStore';
import styles from './style.module.scss';

const PaymentTitle = ({title}:{title: string}) => {

    const darkMode = useDarkModeStore((state) => state.darkMode);

    return <p className={`${styles.payment_title} ${darkMode ? styles.dark_mode : ''}`}>{title}</p>
}

export default PaymentTitle;