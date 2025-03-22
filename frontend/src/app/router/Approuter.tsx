import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLoader from "../../widgets/loader/Loader";

// Ленивые импорты страниц
// const LoginPage = lazy(() => import("../../pages/auth/login/LoginPage"));

const LoginPage = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Ждем 2 секунды
  return import("../../pages/auth/login/LoginPage"); // Загружаем модуль
});

const WelcomePage = lazy(() => import("../../pages/auth/welcome/Welcome"));
const RegisterPage = lazy(
  () => import("../../pages/auth/register/RegisterPage")
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          {/* Страница входа */}
          <Route path="/login" element={<LoginPage />} />

          {/* Страница приветствия */}
          <Route path="/" element={<WelcomePage />} />

          {/* Страница регистрации */}
          <Route path="/registration" element={<RegisterPage />} />

          {/* Можно добавить страницу 404 */}
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
