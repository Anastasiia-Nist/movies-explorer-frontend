import './Auth.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Auth({
  title,
  formName,
  children,
  onSubmit,
  isValid,
  buttonText,
  text,
  link,
  requestMessage,
  resetRequestMessage,
}) {
  // очистка сообщения об ошибке от сервера
  useEffect(() => {
    resetRequestMessage();
  }, []);
  return (
    <section className="auth">
      <div className="auth__container">
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" name={formName} onSubmit={onSubmit}>
          <div className="auth__inputs-container">{children}</div>
          {
            /* request errors */
            <span className="auth__submit-error">
              {requestMessage}
            </span>
          }
          <button
            className={`auth__btn-submit button auth__btn-submit_type_${formName}`}
            disabled={!isValid && true}
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
