import {AuthForm} from '../../../features/auth';
import '../login/style.css';

export const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-overlay"></div>
      
   <AuthForm type="registration" />
    </div>
  );
};

export default LoginPage;