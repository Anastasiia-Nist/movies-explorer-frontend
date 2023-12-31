import './Shortcut.css';
import { smoothScroll } from '../../utils/constants';

function Shortcut() {
  return (
    <section className="shortcut">
      <nav className="shortcut__nav">
        <ul className="shortcut__list">
          <li>
            <a
              className="link shortcut__item"
              href="#about-project"
              onClick={smoothScroll}
            >
              О проекте
            </a>
          </li>
          <li>
            <a
              className="link shortcut__item"
              href="#technology"
              onClick={smoothScroll}
            >
              Технологии
            </a>
          </li>
          <li>
            <a
              className="link shortcut__item"
              href="#about-sudent"
              onClick={smoothScroll}
            >
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Shortcut;
