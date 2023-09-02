import './LandingTitle.css';
// скорее всего в макете ошибка в 10px, т.к. в адаптиве нет разницы между блоками,
// если можно я бы убрала эти нелепые 10px
function LandingTitle({ anotherIndent, children }) {
  return (
    <h2
      className={`landing-title ${
        anotherIndent ? 'landing-title_another-padding' : ''
      }`}
    >
      {children}
    </h2>
  );
}

export default LandingTitle;
