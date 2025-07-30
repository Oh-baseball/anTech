import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, FileUser } from 'lucide-react';
import useLogin from "@/hooks/queries/useLogin";
import useUserStore from "@/store/useUserStore";

const LoginLayout = () => {
  const navigate = useNavigate();
  const [clickedLogin, setClickedLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin()
  const setUserId = useUserStore((state) => state.setUserId);

  const Login = async () => {
    setClickedLogin(true);

    loginMutation.mutate({ email, password }, {
      onSuccess: (res) => {
        setUserId(res.data.user_id.toString());
        setTimeout(() => {
          navigate('/', { viewTransition: true });
        }, 800);
        setClickedLogin(false);
      },
      onError: () => {
        alert('로그인 실패! 이메일/비밀번호를 확인하세요.');
        setClickedLogin(false);
      },
    });
  }

  const Resister = () => {
    navigate('/resister', { viewTransition: true });
  }

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
          <input
            className={styles.user_email}
            type="text"
            placeholder="아이디"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.user_password}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.button_part}>
          <button 
            className={`${styles.login_btn} ${clickedLogin ? styles.clickedCheck : ""}`}
            onClick={Login} disabled={clickedLogin}
          >
            <span className={styles.lock_icon}><Lock /></span>
            <div className={styles.login_box}>
              <span className={styles.login_text}>로그인</span>
            </div>
          </button>
          <button className={styles.signup_btn}
            onClick={Resister} 
          >
            <span className={styles.doc_icon}><FileUser /></span>
            <div>
              <span className={styles.signup_text}>회원가입</span>
            </div>
          </button>
        </div>
        <div className={styles.qna_part}>
          <a href="#">계정 정보를 잊어버렸어요</a>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
