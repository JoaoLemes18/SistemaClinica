export interface CardProps {
  espec: string;
  title: string;
  icon: JSX.Element;
  path: string;
  className?: string; // Propriedade opcional para className
  disabled?: boolean; // Propriedade opcional para desabilitar o card
}
