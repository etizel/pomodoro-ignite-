import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 1rem;
  min-height: 100vh;

  





// Adicione também estilos para o botão se não existir
export const BaseCountdownButton = styled.button`
  width: 100%;
  max-width: 300px;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.theme['gray-100']};
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  

  
  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 0.875rem;
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${props => props.theme['red-500']};
   &:not(:disabled):hover {
    background: ${props => props.theme['red-700']};
   }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${props => props.theme['green-500']}; 
  &:not(:disabled):hover {
  background: ${props => props.theme['red-700']};
  }
  

`