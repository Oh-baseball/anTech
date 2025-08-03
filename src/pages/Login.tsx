import LoginLayout from '@/components/Login';

const Login = () => {
  console.log(import.meta.env.VITE_BASE_URL);
  return (
    <div>
      <LoginLayout />
    </div>
  );
};

export default Login;
