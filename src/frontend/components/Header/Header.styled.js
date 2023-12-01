import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 21px 20px;
  border-radius: 15px;
  border: 1px solid #ededed;

  background: #fbfcfc;
`;

export const LogoLink = styled(Link)`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.11;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: center;
  width: 45px;
  padding-right: 312px;
`;
