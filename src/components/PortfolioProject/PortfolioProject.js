import './PortfolioProject.css';
import pointer from '../../images/pointer.svg';

function PortfolioProject({ project }) {
  return (
    <li className="portfolio__item">
      <a
        className="link portfolio__link"
        href={project.url}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <p className='portfolio__name'>{project.name}</p>
        <img className='portfolio__img' src={pointer} alt='Указательная стрелка'></img>
      </a>
    </li>
  );
}

export default PortfolioProject;
