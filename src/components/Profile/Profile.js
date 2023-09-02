import './Profile.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Input from '../Input/Input';
import { ENDPOINT_ROOT } from '../../utils/constants';

function Profile() {
  const [isEditProfile, setIsEditProfile] = useState(false);

  const {
    values, handleChange, errors, isValid, setValues,
  } = useFormAndValidation({});

  function handleClickEditProfile(evt) {
    evt.preventDefault();
    setIsEditProfile(true);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    // логика передачи данных
    setIsEditProfile(false);
  }
  function onLogout() {
    // логика выхода из аккаунта
    setIsEditProfile(false);
  }
  useEffect(() => {
    setValues({ name: 'Настя', email: 'anist@gmail.com' });
  }, []);
  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__title">Привет, Настя!</h1>
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
                <span className="profile__submit-error">
                  Временное сообщение об ошибке.
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
              <button
                type="button"
                className="profile__btn-edit button"
                onClick={handleClickEditProfile}
                aria-label="Редактировать профиль"
              >
                Редактировать
              </button>
              <Link
                className="profile__btn-logout button"
                to={ENDPOINT_ROOT}
                onClick={onLogout}
              >
                Выйти из аккаунта
              </Link>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
export default Profile;
