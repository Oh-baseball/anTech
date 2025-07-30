import styles from "./style.module.scss";

const Loading = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.logo_section}>
        <div className={`${styles.text_area} ${styles.moveUp}`}>
          <span>A</span>
          <span>N</span>
          <span>T</span>
          <span>E</span>
          <span>C</span>
          <span>H</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
