import type { IDSColors } from '../../../../types';

export type ButtonSize = 'big' | 'normal' | 'small';
export type ButtonStyles = 'square' | 'round';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IDSColors {
  text?: string;
  bStyle?: ButtonStyles;
  bSize?: ButtonSize;
  minWidth?: string | number;
}
