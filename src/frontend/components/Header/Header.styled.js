import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  padding: 21px 20px;
  margin-bottom: 40px;
  border-radius: 15px;
  border: 1px solid #ededed;

  background: #fbfcfc;
`;

export const LogoLink = styled(Link)`
  color: var(--text-dark);
  font-size: 18px;
  font-weight: 800;
  line-height: 1.11;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  margin-right: 312px;

  svg {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    height: 6px;
    width: 11px;
    position: absolute;
    left: 11px;
    top: 40px;
    background: var(--transparent-gray);
    clip-path: ellipse(70% 50% at 50% 50%);
    box-shadow: 0px 0px 0px 20px var(--transparent-gray);
  }
`;
