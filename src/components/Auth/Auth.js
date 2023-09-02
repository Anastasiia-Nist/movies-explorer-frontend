import './Auth.css';
import { Link } from 'react-router-dom';

function Auth({
  title,
  formName,
  children,
  onSubmit,
  isValid,
  buttonText,
  text,
  link,
}) {
  return (
    <section className="auth">
      <div className="auth__container">
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" name={formName} onSubmit={onSubmit}>
          <div className="auth__inputs-container">
            {children}
            {
              /* request errors */
              <span className="auth__submit-error auth__submit-error_active ">
                Временное сообщение об ошибке.
              </span>
            }
          </div>
          <button
            className={`auth__btn-submit button auth__btn-submit_type_${formName}`}
            disabled={!isValid}
            type="submit"
          >
            {buttonText}
          </button>
        </form>
        <div className="auth__text">
          <span className="auth__span">{text}</span>
          <Link className="auth__link link" to={link}>
            {buttonText === 'Войти' ? 'Регистрация' : 'Войти'}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Auth;
