import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Input from '../Input/Input';
import Auth from '../Auth/Auth';
import { ENDPOINT_SIGNIN, REGEX_EMAIL } from '../../utils/constants';

function Register({ handleRegister, requestMessage, resetErrorRequestMessage }) {
  const app = useContext(AppContext);
  // валидация формы
  const {
    values, handleChange, errors, isValid,
  } = useFormAndValidation({});
  // отправка формы
  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister(values);
  }
  return (
    <main>
      <Auth
        title="Добро пожаловать!"
        formName="register"
        onSubmit={handleSubmit}
        isValid={isValid}
        buttonText={app.isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        text="Уже зарегистрированы?"
        link={ENDPOINT_SIGNIN}
        requestMessage={requestMessage}
        resetRequestMessage={resetErrorRequestMessage}
      >
        <Input
          label="Имя"
          id="name"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder="Имя"
          required
          value={values.name}
          onChange={handleChange}
          errors={errors.name}
          isValid={isValid}
          isEdit={true}
        />
        <Input
          label="E-mail"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
          pattern={REGEX_EMAIL}
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
    </main>
  );
}
export default Register;
