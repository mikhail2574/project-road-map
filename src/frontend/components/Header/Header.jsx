import Navbar from '../NavBar/Navbar';
import { LogoLink, StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <svg width="38" height="45">
          <use href="../../icons/sprite.svg#icon-edit" />
        </svg>
        Дорожня карта
      </LogoLink>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
