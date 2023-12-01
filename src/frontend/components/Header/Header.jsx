import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <svg width="25" height="32">
          <use href="../../icons/sprite.svg#icon-logo"></use>
        </svg>
        <span>Дорожня карта</span>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
