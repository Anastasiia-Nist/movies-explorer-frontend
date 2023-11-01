import Promo from '../Promo/Promo';
import Shortcut from '../Shortcut/Shortcut';
import AboutProject from '../AboutProject/AboutProject';
import Technology from '../Technology/Technology';
import AboutStudent from '../AboutStudent/AboutStudent';

function Main() {
  return (
    <>
      <main className='main'>
        <Promo />
        <Shortcut />
        <AboutProject />
        <Technology />
        <AboutStudent />
      </main>
    </>
  );
}

export default Main;
