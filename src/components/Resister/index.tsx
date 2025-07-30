import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUser } from 'lucide-react';
import useLogin from "@/hooks/queries/useLogin";
import useUserStore from "@/store/useUserStore";
import { useCreateUser } from "@/hooks/queries/useUser";

const ResisterLayout = () => {
  const navigate = useNavigate();
  const [clickedLogin, setClickedLogin] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const loginMutation = useLogin()
  const ResisiterMutation = useCreateUser()

  const Resister = () => {
    ResisiterMutation.mutate({ name, phone, email, password}, {
      onSuccess: () => {
        setTimeout(() => {
          navigate('/login', {viewTransition: true});
        });
      },
      onError: () => {
        alert('회원가입 실패! 중복된 아이디 입니다.');
      }
    })
  }

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordCheck(value);

    if (password && value && password !== value) {
      setPasswordError('비밀번호가 서로 다릅니다.');
    } else {
      setPasswordError('');
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (passwordCheck && value !== passwordCheck) {
      setPasswordError('비밀번호가 서로 다릅니다.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.logo_section}>
        <span>ANTECH</span>
      </div>
      <div className={`${styles.login_section} ${styles.growUp}`}>
        <div className={styles.input_part}>
          <input
            className={styles.user_email}
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={styles.user_password}
            type="text"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
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
            onChange={handlePassword}
            required
          />
          <input
            className={styles.user_password}
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={handlePasswordCheck}
            required
          />
          {passwordError && (
            <div className={styles.error_message}>
              {passwordError}
            </div>
          )}
        </div>
        <div className={styles.button_part}>
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
          <a href="#">도움이 필요해요!</a>
        </div>
      </div>
    </div>
  );
};

export default ResisterLayout;
