import { StyledLink } from './Navbar.styled';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/">Довідник</StyledLink>
        </li>
        <li>
          <StyledLink to="/papers">Дорожній лист</StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
