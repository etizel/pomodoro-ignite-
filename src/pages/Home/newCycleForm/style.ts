import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  text-align: center;

  input {
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['green-500']};
    }

    &[type='number'] {
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

    input[type='number'] {
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

    label[for='task'] {
      order: 1;
    }

    label[for='minutesAmount'] {
      order: 3;
    }

    input[type='number'] {
      order: 4;
      width: 4rem;
    }

    span {
      order: 5;
    }
  }
`;
