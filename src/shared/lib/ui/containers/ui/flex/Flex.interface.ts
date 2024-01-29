export type FlexJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'col' | 'row-reverse' | 'col-reverse';

export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
}
