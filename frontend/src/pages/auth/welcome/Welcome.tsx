import './welcome.css';

import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
    const navigate = useNavigate()
    
    const handleClick= () =>{
        navigate('/login')
    }

  return (
    <div className="welcome-container">
      <div className="welcome-overlay"></div>
      <header className="welcome-header">
        <h1>HealthManager</h1>
        <p>Ваш персональный помощник в управлении здоровьем</p>
      </header>

      <section className="welcome-content">
        <h2>Начните заботиться о себе уже сегодня</h2>
        <ul>
          <li>📊 Отслеживайте свои health-метрики</li>
          <li>📅 Планируйте и получайте напоминания</li>
          <li>💡 Получайте персональные рекомендации</li>
          <li>📝 Ведите дневник самочувствия</li>
        </ul>
        <div className="welcome-buttons">
          <button className="try-button">Попробовать</button>
          <button onClick={handleClick} className="auth-button">Войти / Зарегистрироваться</button>
        </div>
      </section>

      <section className="welcome-stats">
        <div className="stat-card">
          <h3>10,000+</h3>
          <p>Довольных пользователей</p>
        </div>
        <div className="stat-card">
          <h3>95%</h3>
          <p>Улучшили свое здоровье</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Поддержка и помощь</p>
        </div>
      </section>


      <footer className="welcome-footer">
        <p>© 2025 HealthManager. Все права защищены.</p>
      </footer>
    </div>
  );
};
export default WelcomePage;