import styled from 'styled-components';

export const HistoryContainer = styled.main`
 flex: 1;
 padding: 3.5rem;

 display: flex;
 flex-direction: column;

 h1{
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-100']};
 }


`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th{
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
    }

    &:first-child {
      border-top-left-radius: 10px;
      padding-left: 1.5rem;
    }
    &:first-child {
      border-top-right-radius: 10px;
      padding-right: 1.5rem;
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 0.875rem;
      line-height: 1.6;
      padding: 1rem;

          &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }
    &:first-child {
      padding-right: 1.5rem;
     
    }
    }

  }
`