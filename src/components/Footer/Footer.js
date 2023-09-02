import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/'
      || pathname === '/movies'
      || pathname === '/saved-movies' ? (
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
