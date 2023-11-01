import './Header.css';
import { useLocation } from 'react-router-dom';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import {
  ENDPOINT_MOVIES,
  ENDPOINT_PROFILE,
  ENDPOINT_ROOT,
  ENDPOINT_SAVED_MOVIES,
  ENDPOINT_SIGNIN,
  ENDPOINT_SIGNUP,
} from '../../utils/constants';

function Header({ loggedIn }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === ENDPOINT_ROOT
      || pathname === ENDPOINT_MOVIES
      || pathname === ENDPOINT_SAVED_MOVIES
      || pathname === ENDPOINT_PROFILE ? (
        <header
          className={`header ${pathname === ENDPOINT_ROOT ? 'header_type_landing' : ''}`}
        >
          <Logo />
          {loggedIn ? (
            <Navigation loggedIn={loggedIn} pathname={pathname} />
          ) : (
            <AuthNavigation />
          )}
        </header>
        ) : (
          ''
        )}
      {pathname === ENDPOINT_SIGNIN || pathname === ENDPOINT_SIGNUP ? (
        <header className="header-auth">
          <Logo />
        </header>
      ) : (
        ''
      )}
    </>
  );
}

export default Header;
