import './Technology.css';
import LandingTitle from '../LandingTitle/LandingTitle';
import Tech from '../Tech/Tech';
import { TECHS } from '../../utils/constants';

function Technology() {
  return (
    <section className="technology" id="technology">
      <LandingTitle anotherIndent={true}>Технологии</LandingTitle>
      <div className="technology__description">
        <h3 className="technology__title">7 технологий</h3>
        <p className="technology__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="technology__list">
        {TECHS.map(tech => (
          <Tech key={tech}>{tech}</Tech>
        ))}
      </ul>
    </section>
  );
}

export default Technology;
