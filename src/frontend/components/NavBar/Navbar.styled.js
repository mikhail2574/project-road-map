import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const StyledLink = styled(NavLink)`
  color: #1914134d;
  background-color: var(--nav-btn);
  padding: 14px 51px;

  &.active {
    color: #fbfcfc;
    background-color: var(--btn-active);
  }
  &:hover:not(.active) {
    color: #1914134d;
    background-color: var(--modal-btn-add-active);
  }
`;
