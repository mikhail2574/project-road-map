import styled from 'styled-components';

export const StyledModalWindowWrapper = styled.div`
  width: 544px;
  height: 364px;
  position: relative;
  padding: 44px;
  display: flex;
  flex-direction: column;
  background: #202020;
  border-radius: 15px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledModalInputWrapper = styled.div`
  display: flex;
  gap: 17px;
  margin-bottom: 24px;
`;

export const StyledModalInput = styled.input`
  display: inline-flex;
  padding: 14px 81px 14px 16px;
  align-items: center;
  width: 220px;
  gap: 10px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  /* color: rgba(251, 252, 252, 0.3); */
  color: #fbfcfc;
  border: none;

  border-radius: 12px;
  background-color: #282828;
`;

export const StyledModalInputPosition = styled(StyledModalInput)`
  width: 100%;
  margin-bottom: 44px;
`;

export const StyledErrorSpan = styled.span`
  color: red;
  position: absolute;
`;

export const StyledErrorSpanRank = styled(StyledErrorSpan)`
  top: 143px;
  left: 50px;
`;

export const StyledErrorSpanName = styled(StyledErrorSpan)`
  bottom: 200px;
  right: 135px;
`;

export const StyledErrorSpanPosition = styled(StyledErrorSpan)`
  bottom: 130px;
  left: 50px;
`;

export const StyledEmptyTableTh = styled.th`
  background-color: #f0f0f0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 200px;
`;
