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
      <div className={`${styles.login_section} ${styles.growUp}`}>
        <div className={styles.input_part}>
          <input className={styles.user_email} type="text" placeholder="아이디" required/>
          <input className={styles.user_password} type="text" placeholder="비밀번호" required/>
        </div>
        <div className={styles.button_part}>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
        <div className={styles.qna_part}>
          <a href="#">계정 정보를 잊어버렸어요</a>
        </div>
      </div>
    </div>
  );
};

export default Loading;
