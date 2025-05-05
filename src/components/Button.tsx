import styles from './Button.module.css';

interface ButtonProps {
  color?: 'primary' | 'secundary' | 'danger' | 'sucess';
}

export function Button({ color = 'secundary' }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
  );
}
