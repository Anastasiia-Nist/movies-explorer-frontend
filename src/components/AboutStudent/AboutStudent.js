import './AboutStudent.css';
import LandingTitle from '../LandingTitle/LandingTitle';
import Portfolio from '../Portfolio/Portfolio';
import foto from '../../images/я.jpg';

function AboutStudent() {
  return (
    <section className="about-sudent" id="about-sudent">
      <LandingTitle>Студентка</LandingTitle>
      <div className="about-sudent__description">
        <div className="about-sudent__text-container">
          <h3 className="about-sudent__name">Настя</h3>
          <p className="about-sudent__prof">Веб-разработчик, 31 год</p>
          <p className="about-sudent__text">Очень интересный текст про меня</p>
          <ul className="about-sudent__list">
            <li>
              <a
                className="link about-sudent__link"
                href="https://github.com/Anastasiia-Nist"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="link about-sudent__link"
                href="https://www.codewars.com/users/Anastasiia-Nist"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Codewars
              </a>
            </li>
          </ul>
        </div>
        <div className="about-sudent__foto-container">
          <img
            className="about-sudent__foto"
            src={foto}
            alt="Фото студента"
          ></img>
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutStudent;
