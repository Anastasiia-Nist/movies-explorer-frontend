import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';
import useResize from '../../hooks/useResize';

import {
  ENDPOINT_PROFILE,
  ENDPOINT_MOVIES,
  ENDPOINT_SAVED_MOVIES,
  ENDPOINT_ROOT,
} from '../../utils/constants';

function Navigation({ isloggedIn, pathname }) {
  const isMobile = useResize() <= 800;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  function handleCloseMenu() {
    handleOpenMenu();
  }

  return (
    <section className="navigation">
      {isloggedIn && isMobile && (
        <BurgerButton
          handleOpenMenu={handleOpenMenu}
          isMenuOpened={isMenuOpened}
        />
      )}
      <div
        className={`navigation__wrapper ${
          isMenuOpened ? 'navigation__wrapper_opened' : ''
        }`}
      >
        {isloggedIn && isMobile ? (
          <nav className="navigation__container">
            {isMenuOpened ? (
              <>
                <div className="navigation__item-wrapper">
                  <NavLink
                    className={({ isActive }) => `link navigation__link ${
                      isActive ? 'navigation__link_active' : ''
                    }`
                    }
                    to={ENDPOINT_ROOT}
                    onClick={handleCloseMenu}
                  >
                    Главная
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `link navigation__link ${
                      isActive ? 'navigation__link_active' : ''
                    }`
                    }
                    to={ENDPOINT_MOVIES}
                    onClick={handleCloseMenu}
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `link navigation__link 
                ${isActive ? 'navigation__link_active' : ''}`}
                    to={ENDPOINT_SAVED_MOVIES}
                    onClick={handleCloseMenu}
                  >
                    Сохранённые фильмы
                  </NavLink>
                </div>
                <div className="navigation__account">
                  <NavLink
                    className={({ isActive }) => `link navigation__link navigation__account-link ${
                      isActive ? 'navigation__link_active' : ''
                    }`
                    }
                    to={ENDPOINT_PROFILE}
                    onClick={handleCloseMenu}
                  >
                    Аккаунт
                    <button
                      className={`navigation__account-btn ${
                        pathname !== '/'
                          ? ''
                          : 'navigation__account-btn_type_landing'
                      }`}
                      type="button"
                      aria-label="Кнопка аккаунта"
                    ></button>
                  </NavLink>
                </div>
              </>
            ) : (
              ''
            )}
          </nav>
        ) : (
          <nav className="navigation__container">
            <div className="navigation__item-wrapper">
              <NavLink
                className={({ isActive }) => `link navigation__link ${
                  isActive ? 'navigation__link_active' : ''
                }`
                }
                to={ENDPOINT_MOVIES}
              >
                Фильмы
              </NavLink>
              <NavLink
                className={({ isActive }) => `link navigation__link 
                ${isActive ? 'navigation__link_active' : ''}`}
                to={ENDPOINT_SAVED_MOVIES}
              >
                Сохранённые фильмы
              </NavLink>
            </div>
            <div className="navigation__account">
              <NavLink
                className={({ isActive }) => `link navigation__link navigation__account-link ${
                  isActive ? 'navigation__link_active' : ''
                }`
                }
                to={ENDPOINT_PROFILE}
              >
                Аккаунт
                <button
                  className={`navigation__account-btn ${
                    pathname !== '/'
                      ? ''
                      : 'navigation__account-btn_type_landing'
                  }`}
                  type="button"
                  aria-label="Кнопка аккаунта"
                ></button>
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
export default Navigation;
