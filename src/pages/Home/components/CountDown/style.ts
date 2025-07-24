import styled from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['gray-100']};
  display: flex;
  gap: 1rem;
  
  span {
    background: ${props => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    font-size: 6rem;
    line-height: 5rem;
    gap: 0.5rem;
    
    span {
      padding: 1.5rem 0.75rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 4rem;
    line-height: 3rem;
    gap: 0.25rem;
    
    span {
      padding: 1rem 0.5rem;
    }
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
    width: 3rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0;
    width: 2rem;
  }
`;