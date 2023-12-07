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
`;

export const StyledTableWrapper = styled.table`
  width: 1408px;

  padding: 28px 20px;

  border-radius: 15px;
  background-color: #fbfcfc;
`;

export const StyledTableHead = styled.thead`
  display: flex;
  padding: 14px 158px 14px 20px;
  align-items: center;

  border-radius: 15px;
  border: 1px solid #e2e2e2;
  background-color: #f0f0f0;
`;

export const StyledTableHeaderTr = styled.tr`
  display: grid;
  grid-template-columns: repeat(14, auto);
  gap: 38px;

  text-align: left;
`;

export const StyledTableHeaderTh = styled.th`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;

  color: #8a8a89;
`;

export const StyledTableBody = styled.tbody`
  display: block;
  max-height: 50vh;
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
  display: grid;
  grid-template-columns: repeat(14, auto);
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 28px 20px;
  border-bottom: 1px solid #e2e2e2;
`;

export const StyledTableBodyTd = styled.td`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  color: #191413;
`;

export const StyledTableShortTd = styled(StyledTableBodyTd)`
  max-width: 49px;
`;

export const StyledTableTdLastChild = styled(StyledTableBodyTd)`
  max-width: 49px;
  margin-right: 34px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
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
`;
