export type TooltipOpen = 'top' | 'bottom';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  isShow?: boolean;
  open?: TooltipOpen;
}
