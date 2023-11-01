import './BurgerButton.css';

function BurgerButton({ isMenuOpened, handleOpenMenu }) {
  return (
    <button
      className={`button navigation__burger ${
        isMenuOpened ? 'navigation__btn-close' : ''
      }`}
      type="button"
      aria-label="Кнопка бургер меню"
      onClick={handleOpenMenu}
    >
      <span className="navigation__burger-line"></span>
      <span className="navigation__burger-line"></span>
      <span className="navigation__burger-line"></span>
      <span className="navigation__burger-line"></span>
      <span className="navigation__burger-line"></span>
      <span className="navigation__burger-line"></span>
    </button>
  );
}
export default BurgerButton;
