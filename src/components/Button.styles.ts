import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'sucess';
interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
`