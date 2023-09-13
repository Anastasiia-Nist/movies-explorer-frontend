import './Header.css';
import { useLocation } from 'react-router-dom';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({ loggedIn }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/'
      || pathname === '/movies'
      || pathname === '/saved-movies'
      || pathname === '/profile' ? (
        <header
          className={`header ${pathname === '/' ? 'header_type_landing' : ''}`}
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
      {pathname === '/signin' || pathname === '/signup' ? (
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
