import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonContainerProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'secondary' }: ButtonContainerProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
