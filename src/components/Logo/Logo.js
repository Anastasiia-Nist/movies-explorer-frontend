import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { ENDPOINT_ROOT } from '../../utils/constants';

function Logo() {
  return (
    <Link className="logo link" to={ENDPOINT_ROOT}>
      <img className="logo__img" src={logo} alt="Лого Movies Explorer"></img>
    </Link>
  );
}
export default Logo;
