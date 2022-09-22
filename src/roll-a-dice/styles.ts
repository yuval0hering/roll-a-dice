import styled from "styled-components";

export const Root = styled.div`
 color: black;
 padding: 40px;
 display: flex;
 flex-direction: column; 
 gap: 48px;
`;

export const Title = styled.div`
  font-weight: bold;
  color: black;
  font-size: 24px;
  padding-bottom: 24px;
`;

export const DiceConfigureWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CurrentResultWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResultWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const Statistics = styled.div`
  display: flex;
  font-size: 24px;
  gap: 24px;
  font-weight: bold;
`;

export const RowConfigureWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 24px;
  
`;