import './Portfolio.css';
import PortfolioProject from '../PortfolioProject/PortfolioProject';
import { PORTFOLIO_PROJECTS } from '../../utils/constants';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        {PORTFOLIO_PROJECTS.map(project => (
          <PortfolioProject key={project.name} project={project}></PortfolioProject>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
