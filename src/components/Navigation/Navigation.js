import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';
import useResize from '../../hooks/useResize';
import accImg from '../../images/icon__account.svg';
import accImgLanding from '../../images/icon__account-landing.svg';

import {
  ENDPOINT_PROFILE,
  ENDPOINT_MOVIES,
  ENDPOINT_SAVED_MOVIES,
  ENDPOINT_ROOT,
  PAGE_TABLET_HEADER,
} from '../../utils/constants';

function Navigation({ loggedIn, pathname }) {
  const isMobile = useResize() <= PAGE_TABLET_HEADER;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  function handleCloseMenu() {
    handleOpenMenu();
  }

  return (
    <section className="navigation">
      {loggedIn && isMobile && (
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
        {loggedIn && isMobile ? (
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
                    <img
                      className="navigation__account-img"
                      src={accImg}
                      alt="Ссылка на аккаунт"
                    ></img>
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
                {pathname !== ENDPOINT_ROOT ? (
                  <img
                    className="navigation__account-img"
                    src={accImg}
                    alt="Ссылка на аккаунт"
                  ></img>
                ) : (
                  <img
                    className="navigation__account-img navigation__account-img_type_landing"
                    src={accImgLanding}
                    alt="Ссылка на аккаунт главной страницы"
                  ></img>
                )}
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
export default Navigation;
