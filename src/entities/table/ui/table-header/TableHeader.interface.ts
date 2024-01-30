import { ReactNode } from 'react';

export interface ITableHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}
