import './Footer.css';
import { useLocation } from 'react-router-dom';
import { ENDPOINT_MOVIES, ENDPOINT_ROOT, ENDPOINT_SAVED_MOVIES } from '../../utils/constants';

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === ENDPOINT_ROOT
      || pathname === ENDPOINT_MOVIES
      || pathname === ENDPOINT_SAVED_MOVIES ? (
        <footer className="footer">
          <div>
            <h3 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h3>
          </div>
          <div className="footer__container">
            <p className="footer__data">&copy; {new Date().getFullYear()}</p>
            <ul className="footer__link-list">
              <li>
                <a
                  className="link footer__link"
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  className="link footer__link"
                  href="https://github.com"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </footer>
        ) : (
          ''
        )}
    </>
  );
}

export default Footer;
