export type ButtonSize = 'big' | 'normal' | 'small';
export type ButtonStyles = 'square' | 'round';
export type ButtonColor = 'white' | 'primary' | 'secondary' | 'danger';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  bStyle?: ButtonStyles;
  bColor?: ButtonColor;
  bSize?: ButtonSize;
  minWidth?: string | number;
}
