import { Icon } from '../Icon';
import Navbar from '../NavBar/Navbar';
import { LogoLink, StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <Icon name="logo" width={38} height={45} />
        Дорожня карта
      </LogoLink>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
