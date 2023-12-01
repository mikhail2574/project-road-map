import styled from 'styled-components';

export const StyledSection = styled.section`
  background: #fbfcfc;
  border-radius: 15px;

  padding: 28px 20px;
`;

export const TableScroll = styled.div`
  /* position: relative;
  width: 100%;
  z-index: 1;
  margin: auto;
  overflow: auto;
  height: 280px;

  /* td,
  th {
    text-align: center;
    border: 1px solid #e2e2e2;
    vertical-align: top;
  } */
`;

export const StyledTable = styled.table`
  width: 1368px;
  display: block;
  height: 280px;
  overflow: auto;
  border-collapse: collapse;
  /* border-collapse: separate; */
  border-spacing: 0;
  border-radius: 15px;

  margin-bottom: 20px;
  border: 1px solid #e2e2e2;

  td,
  th {
    text-align: center;
    border: 1px solid #e2e2e2;
  }
  th {
    border-top: none;
  }
  td:first-child,
  th:first-child {
    border-left: none;
  }
`;

export const StyledTHead = styled.thead`
  /* height: 120px; */
  color: var(--gray);
  font-size: 12px;
  line-height: 1.3;
  top: 0;
  th {
    padding: 14px 0;
    font-weight: 500;
  }
`;

export const StyledTBody = styled.tbody`
  /* td {
    border-bottom: none;
    border-right: none;
  } */
`;

export const StyledTFoot = styled.tfoot`
  z-index: 2;
  position: sticky;
  bottom: 0;
  background: #fbfcfc;
  th,
  td {
    border-bottom: none;
  }
`;

export const SubRow = styled.tr`
  th {
    padding: 6px 0;
  }
`;

export const SubSubRow = styled(SubRow)`
  font-size: 10px;
  line-height: 1.2;
`;

export const StyledRow = styled.tr`
  height: 60px;
  text-align: left;
`;
