import styled from 'styled-components';

export const PaperSection = styled.section`
  border: 1px solid #e2e2e2;
  border-radius: 15px;
  position: relative;
  width: 1400px;
  height: 1022px;
  overflow-y: scroll;
`;
export const PaperWrapper = styled.div`
  background-color: #fbfcfc;
  border-radius: 15px;
  padding: 20px;
`;

export const MainContainer = styled.div``;

export const VerticalContainer = styled.div`
  transform: rotate(270deg);
  height: 207px;
  width: 1020px;
  position: absolute;
  top: 407px;
  left: -400px;
  border-bottom: 1px solid #e2e2e2;
`;

export const HorizontalContainer = styled.div``;

export const MainInformationContainer = styled.div``;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 24px;
`;

export const ParagraphContainer = styled.div``;

export const Riddle = styled.p`
  font-size: 8px;
  line-height: 10px;
  color: #8a8a89;
`;

export const Space = styled.span`
  border-bottom: 2px solid #191413;
  display: inline-block;
`;

export const TableSection = styled.div`
  margin-left: 213px;
  margin-top: 286px;
  width: 1161px;
`;
export const TableSection2 = styled.div`
  width: 1161px;
  margin-left: 213px;
  margin-top: 20px;
`;

export const TableSection3 = styled.div`
  margin-top: 16px;
  margin-left: 213px;
  width: 1161px;
`;

export const StyledTable = styled.table`
  width: 1161px;
  display: block;
  border-collapse: separate;
  border-spacing: 0;

  td,
  th {
    text-align: center;
    border: 1px solid #e2e2e2;
    width: 90px;
  }
`;

export const StyledTable2 = styled.table`
  width: 1161px;
  display: block;
  border-collapse: separate;
  border-spacing: 0;

  td,
  th {
    text-align: center;
    border: 1px solid #e2e2e2;
    width: 90px;
  }
`;

export const StyledTable3 = styled.table`
  width: 1161px;
  height: 320px;
  display: block;
  border-collapse: separate;
  border-spacing: 0;

  td,
  th {
    text-align: center;
    border: 1px solid #e2e2e2;
    width: 90px;
  }
`;

export const StyledTBody = styled.tbody`
  td,
  th {
    text-align: center;
    border: 1px solid #e2e2e2;
    width: 115.45px;
    height: 40px;
  }
`;

export const Accent = styled.p`
  font-weight: 600;
  color: #191413;
`;

export const StyledTHead2 = styled.thead`
  height: 72px;
  color: var(--gray);
  font-size: 12px;
  line-height: 1.3;

  th {
    font-weight: 500;
    padding: 14px 0;
    vertical-align: top;
  }
`;

export const StyledTHead3 = styled.thead`
  height: 72px;
  color: var(--gray);
  font-size: 12px;
  line-height: 1.3;

  th {
    font-weight: 500;
    padding: 14px 0;
    vertical-align: top;
  }
`;
