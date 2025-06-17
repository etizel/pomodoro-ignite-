import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 1rem;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    width: 100%;
    height: 100%;
    max-width: 800px;
    
    @media (max-width: 768px) {
      gap: 2rem;
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  text-align: center;
  
  input {
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme['gray-100']};
    
    &:focus {
      box-shadow: none;
      border-color: ${props => props.theme['green-500']};
    }
    
    &[type="number"] {
      text-align: center;
      width: 4rem;
    }
  }
  
  input#task {
    flex: 1;
    min-width: 200px;
    
    @media (max-width: 480px) {
      min-width: 150px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 0.25rem;
    
    input {
      font-size: 1rem;
      height: 2rem;
    }
    
    input[type="number"] {
      width: 3rem;
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    
    input#task {
      order: 2;
      width: 100%;
      max-width: 250px;
    }
    
    label[for="task"] {
      order: 1;
    }
    
    label[for="minutesAmount"] {
      order: 3;
    }
    
    input[type="number"] {
      order: 4;
      width: 4rem;
    }
    
    span {
      order: 5;
    }
  }
`;

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