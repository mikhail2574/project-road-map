import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 32px;
  margin-bottom: 32px;
`;

export const StyledTitleDirectory = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
`;

export const StyledAddButton = styled.button`
  padding: 14px 28px;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  border: 1px solid rgba(71, 82, 63, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #47523f;
    color: #fff;
  }
`;

export const StyledTableScrollWrapper = styled.div`
  max-height: 30vh;
  overflow-y: scroll;
  /* position: relative; */
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
`;

export const StyledTableWrapper = styled.table`
  padding: 28px 20px;
  border-radius: 15px;
  background-color: #fbfcfc;
  border-spacing: 0;
`;

//  -----------------  THEAD  -----------------  //
export const StyledTableHead = styled.thead`
  height: 100px /* delete border in table head */;
  /* display: block; */

  text-align: left;

  /* border-radius: 15px; */

  position: sticky;
  z-index: 1;
  top: 0;
`;

export const StyledTableHeaderTr = styled.tr`
  padding: 14px 158px 14px 20px;
  /* display: grid;
  gap: 38px;
  grid-template-columns: repeat(14, auto); */

  text-align: left;
`;

export const StyledTableHeaderTh = styled.th`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #8a8a89;
  background-color: #f0f0f0;

  padding-left: 9px;
  padding-right: 9px;

  text-align: center;

  &:nth-child(1) {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  &:nth-child(4) {
    width: 70px;
  }
  &:nth-child(8) {
    width: 100px;
  }
  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 120px;
  }
`;

//  -----------------  TBODY  -----------------  //
export const StyledTableBody = styled.tbody`
  /* display: block; */
  max-height: 40vh;
  overflow-y: scroll;
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
`;

export const StyledTableBodyTr = styled.tr`
  /* display: grid;
  grid-template-columns: repeat(14, auto);
  align-items: center;
  justify-content: space-between; */
  position: relative;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 28px 20px;
  height: 80px;
  /* border-bottom: 1px solid #e2e2e2; */

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    /* border-bottom: 1px solid #e2e2e2; */
    background-color: #e2e2e2;
    height: 1px;
    width: 100%;
  }
`;

export const StyledTableBodyTd = styled.td`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #191413;

  text-align: center;
`;

export const StyledTableShortTd = styled(StyledTableBodyTd)`
  max-width: 49px;
`;

export const StyledTableTdLastChild = styled.td`
  /* width: 158px; */
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const StyledTableEditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 12px;
  border: none;
  border-radius: 50%;
  background-color: #47523f;
  cursor: pointer;
  &:hover {
    background-color: rgba(40, 90, 70, 1);
  }
`;

export const StyledTableDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 12px;
  border: none;
  border-radius: 50%;
  background-color: #191413;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;
