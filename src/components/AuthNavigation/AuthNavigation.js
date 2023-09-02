import './AuthNavigation.css';
import { Link } from 'react-router-dom';
import { ENDPOINT_SIGNUP, ENDPOINT_SIGNIN } from '../../utils/constants';

function AuthNavigation() {
  return (
    <nav className="header__auth">
      <Link className="link header__auth-link" to={ENDPOINT_SIGNUP}>
        Регистрация
      </Link>
      <Link className="link header__auth-link header__auth-link_color_dark" to={ENDPOINT_SIGNIN}>
        Войти
      </Link>
    </nav>
  );
}

export default AuthNavigation;
