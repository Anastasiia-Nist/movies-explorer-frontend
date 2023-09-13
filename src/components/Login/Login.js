import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Input from '../Input/Input';
import Auth from '../Auth/Auth';

function Login({ handleLogin, requestMessage, resetErrorRequestMessage }) {
  const app = useContext(AppContext);
  // валидация формы
  const {
    values, handleChange, errors, isValid,
  } = useFormAndValidation({});
  // отправка формы
  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values);
  }

  return (
    <main>
      <Auth
        title="Рады видеть!"
        formName="login"
        onSubmit={handleSubmit}
        isValid={isValid}
        buttonText={app.isLoading ? 'Вход...' : 'Войти'}
        text="Ещё не зарегистрированы?"
        link="/signup"
        requestMessage={requestMessage}
        resetRequestMessage={resetErrorRequestMessage}
      >
        <Input
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
          value={values.email}
          onChange={handleChange}
          errors={errors.email}
          isValid={isValid}
          isEdit={true}
        />
        <Input
          label="Пароль"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          required
          minLength="8"
          maxLength="20"
          value={values.password}
          onChange={handleChange}
          errors={errors.password}
          isValid={isValid}
          isEdit={true}
        />
      </Auth>
    </main >
  );
}
export default Login;
