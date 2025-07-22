import styles from './style.module.scss';

const RemittanceLayout = () => {
  return (
    <div className={styles.coin}>
      <div className={styles.cylinder_edge}>
        <div className={styles.cylinder_top}></div>
        <div className={styles.cylinder_bottom}></div>
      </div>
    </div>
  )
};

export default RemittanceLayout