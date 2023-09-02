import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  function handleStepBack() {
    navigate('/');
  }

  return (
    <main className="not-found">
      <div className="not-found__text">
        <h3 className="not-found__title">404</h3>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button type="button" className="not-found__btn button" onClick={handleStepBack}>Назад</button>
    </main>
  );
}

export default PageNotFound;
