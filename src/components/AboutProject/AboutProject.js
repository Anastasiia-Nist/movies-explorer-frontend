import './AboutProject.css';
import LandingTitle from '../LandingTitle/LandingTitle';
import ProgressBar from '../ProgressBar/ProgressBar';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <LandingTitle>О проекте</LandingTitle>
      <div className="about-project__text-container">
        <article className="about-project__text-block">
          <h3 className="about-project__text-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__text-block">
          <h3 className="about-project__text-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <ProgressBar></ProgressBar>
    </section>
  );
}

export default AboutProject;
