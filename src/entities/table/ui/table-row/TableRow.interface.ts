import { ReactNode } from 'react';

export interface ITableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}
