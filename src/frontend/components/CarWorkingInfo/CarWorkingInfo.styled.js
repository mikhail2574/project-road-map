import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnSection = styled.section`
  padding: 0 20px;
  margin-bottom: 10px;
`;

export const TableSection = styled.section`
  background: #fbfcfc;
  border-radius: 15px;
  padding: 28px 20px;
`;

/*  ========================= btn section ========================= */
export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const StyledTitle = styled.h1`
  font-size: 32px;
  line-height: 1;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const InfoBtn = styled.button`
  font-weight: 600;
  line-height: 1.43;
  padding: 14px 28px;
  border-radius: 12px;
  border: 1px solid rgba(71, 82, 63, 0.2);
  transition: var(--fast);

  &:hover {
    cursor: pointer;
    color: var(--white);
    background: var(--btn-active);
  }
`;

export const SaveBtn = styled(InfoBtn)`
  padding: 14px 22px;
  background: var(--white);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 32px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  color: var(--gray);
  text-decoration: none;

  &.active {
    color: var(--text-dark);
  }
  &.active:before {
    content: '';
    position: absolute;
    top: 35px;
    width: 100%;
    border-bottom: solid 2px var(--modal-btn-add);
  }
  &:hover:not(.active) {
    color: var(--text-dark);
  }
`;

export const Line = styled.hr`
  border: none;
  margin: 16px 0 20px;
  border-top: 1px solid #e2e2e2;
`;

export const StyledText = styled.p`
  color: var(--gray);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
`;

export const StyledSpan = styled.span`
  color: var(--text-dark);
`;

/*  ========================= table ========================= */

export const TableScroll = styled.div`
  position: relative;
  width: 1408px;
  height: 282px;
  /* border-radius: 15px; */

  z-index: 1;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-track {
    box-shadow: black;
  }
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  margin-bottom: 20px;
`;

export const StyledTable = styled.table`
  width: 1368px;
  display: block;
  /* overflow: hidden; */
  /* border-collapse: collapse; */
  border-collapse: separate;
  border-spacing: 0;
  /* border-radius: 15px; */

  /* border: 1px solid #e2e2e2; */

  td,
  th {
    text-align: center;
    border: 1px solid #e2e2e2;
  }
  /* th {
    border-top: none;
  }
  td:first-child,
  th:first-child {
    border-left: none;
  } */
`;

export const StyledTHead = styled.thead`
  height: 120px;
  color: var(--gray);
  font-size: 12px;
  line-height: 1.3;

  th {
    font-weight: 500;
    padding: 14px 0;
    vertical-align: top;
  }
`;

export const StyledTBody = styled.tbody`
  /* td {
    border-bottom: none;
    border-right: none;
  } */
`;

export const StyledTFoot = styled.tfoot`
  background: #fbfcfc;
  z-index: 20;
  position: sticky;
  bottom: 0;

  th,
  td {
    /* border-bottom: none; */
  }
`;

export const THeadRow = styled.tr`
  /* height: 40px; */

  th {
    /* text-align: left; */
    /* padding: 10px 24px; */
  }
`;

export const SubRow = styled.tr`
  th {
    padding: 6px 10px;
  }
`;

export const SubSubRow = styled(SubRow)`
  font-size: 10px;
  line-height: 1.2;

  th {
    width: 48px;
    padding: 6px 4px;
  }
`;

export const TBodyRow = styled.tr`
  height: 60px;

  td:first-child {
    width: 207px;
    text-align: left;
    padding: 10px 24px;
  }
  td:last-child {
    width: 395px;
    padding: 10px 24px;
  }
  td:nth-child(2),
  td:nth-child(3) {
    width: 92px;
    padding: 10px 15px;
  }
  td:nth-child(2),
  td:nth-child(3) {
    width: 92px;
    padding: 10px 15px;
  }
`;

export const TFootRow = styled.tr`
  height: 40px;

  th {
    text-align: left;
    padding: 10px 24px;
  }
`;

/* ========================= Rest ========================= */

export const CalcDiv = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 35px;
`;

export const PersonnelDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  p {
    font-weight: 500;
    line-height: 1.29;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;

  input,
  select {
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(25, 20, 19, 0.2);
  }
`;

export const AuxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
