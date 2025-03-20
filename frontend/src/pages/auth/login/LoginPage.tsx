import {AuthForm} from '../../../features/auth';
// import LoginPageApp from '../../../features/auth/ui/authform';
import './style.css';

export const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-overlay"></div>
      <AuthForm type="login" />
    </div>
  );
};

export default LoginPage;