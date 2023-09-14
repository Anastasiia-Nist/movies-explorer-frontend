import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';
import { ENDPOINT_ROOT } from '../../utils/constants';

function PageNotFound() {
  const navigate = useNavigate();

  function handleStepBack() {
    navigate(ENDPOINT_ROOT);
  }

  return (
    <main>
      <section className="not-found">
        <div className="not-found__text">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <button
          type="button"
          className="not-found__btn button"
          onClick={handleStepBack}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default PageNotFound;
