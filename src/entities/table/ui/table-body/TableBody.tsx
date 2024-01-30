import { FC } from 'react';
import type { ITableBodyProps } from './TableBody.interface';

export const TableBody: FC<ITableBodyProps> = (props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <div {...anotherProps} className={className}>
      {children}
    </div>
  );
};
