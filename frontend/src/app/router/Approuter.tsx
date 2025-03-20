import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/auth/login/LoginPage';
import WelcomePage from '../../pages/auth/welcome/Welcome';
import RegisterPage  from '../../pages/auth/register/RegisterPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Главная страница */}

        {/* Страница входа */}
        <Route path="/login" element={<LoginPage/>} />

        {/* Страница приветствие */}
        <Route path='/' element ={<WelcomePage/>} />
        
        {/* Страница регистрации */}
        <Route path='/registration' element ={<RegisterPage/>} />


        {/* Страница 404 (если маршрут не найден) */}
      </Routes>
    </BrowserRouter>
  );
};