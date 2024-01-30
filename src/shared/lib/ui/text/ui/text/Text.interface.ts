import type { IDSColors } from '../../../../types';

export type TextStyle = 'italic' | 'thin' | 'bold';
export type TextSize = 'big' | 'normal' | 'small';
export type TextTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface ITextProps extends React.HTMLAttributes<HTMLDivElement>, IDSColors {
  title?: string;
  text?: string;
  tSize?: TextSize;
  tStyle?: TextStyle;
  textTag?: TextTagType;
  titleTag?: TextTagType;
}
