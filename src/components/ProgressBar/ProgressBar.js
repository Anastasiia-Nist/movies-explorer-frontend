import './ProgressBar.css';

function ProgressBar() {
  return (
    <div className="progress-bar">
      <div className="progress-bar__range">
        <span className="progress-bar__segment-1">1 неделя</span>
        <span className="progress-bar__segment-2">4 недели</span>
      </div>
      <div className="progress-bar__caption">
        <span className="progress-bar__caption-text-1">Back-end</span>
        <span className="progress-bar__caption-text-2">Front-end</span>
      </div>
    </div>
  );
}

export default ProgressBar;
