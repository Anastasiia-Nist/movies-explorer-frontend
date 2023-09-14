import './Profile.css';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Input from '../Input/Input';
import { REGEX_EMAIL } from '../../utils/constants';

function Profile({
  onLogout,
  handleUpdateUser,
  requestMessage,
  successRequestMessage,
  resetErrorRequestMessage,
  resetSuccessRequestMessage,
}) {
  const navigate = useNavigate();
  const { name, email } = useContext(CurrentUserContext);
  const [isEditProfile, setIsEditProfile] = useState(false);

  const {
    values, handleChange, errors, isValid, setValues, setIsValid,
  } = useFormAndValidation({});

  function handleClickEditProfile(evt) {
    evt.preventDefault();
    setIsEditProfile(true);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateUser(values);
  }
  // отрисовка данных пользователя
  useEffect(() => {
    setValues({ name, email });
    setIsEditProfile(false);
  }, [name, email]);
  // проверка на различие старых данных пользователя и новых
  useEffect(() => {
    if (values.name === name && values.email === email) {
      setIsValid(false);
    }
  }, [values]);
  // очистка сообщения об ошибке от сервера
  useEffect(() => {
    resetErrorRequestMessage();
  }, [values]);
  // очистка сообщения об успешном обновлении данных от сервера
  useEffect(() => {
    resetSuccessRequestMessage();
  }, [navigate]);
  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__title">Привет, {name || 'пользователь'}!</h1>
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          <div className="profile__inputs-container">
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
              isEdit={isEditProfile}
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
              isEdit={isEditProfile}
            />
          </div>
          {isEditProfile ? (
            <div className="profile__buttons">
              {
                /* request errors */
                <span className="profile__submit profile__submit_error">
                  {requestMessage}
                </span>
              }
              <button
                className="profile__btn-save button"
                type="submit"
                aria-label="Кнопка сохранить"
                disabled={!isValid}
              >
                Сохранить
              </button>
            </div>
          ) : (
            <div className="profile__buttons">
              {
                /* request success */
                <span className="profile__submit profile__submit_success">
                  {successRequestMessage}
                </span>
              }
              <button
                type="button"
                className="profile__btn-edit button"
                onClick={handleClickEditProfile}
                aria-label="Редактировать профиль"
              >
                Редактировать
              </button>
              <button
                className="profile__btn-logout link"
                type="button"
                onClick={onLogout}
              >
                Выйти из аккаунта
              </button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
export default Profile;
