import styled from 'styled-components';

export const StyledSection = styled.section`
  background: #fbfcfc;
  border-radius: 15px;
  padding: 28px 20px;
`;

/*  ========================= table ========================= */

export const TableScroll = styled.div`
  position: relative;
  width: 1408px;
  height: 280px;
  border-radius: 15px;

  z-index: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export const StyledTable = styled.table`
  width: 1368px;
  display: block;
  overflow: hidden;
  border-collapse: collapse;
  /* border-collapse: separate; */
  border-spacing: 0;
  border-radius: 15px;

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
  background: #fbfcfc;
  z-index: 20;
  position: sticky;
  bottom: 0;

  th,
  td {
    /* border-bottom: none; */
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
