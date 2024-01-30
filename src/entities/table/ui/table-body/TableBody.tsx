import { FC } from 'react';
import { classNames } from 'src/shared/lib/class-names';
import type { ITableBodyProps } from './TableBody.interface';
import s from './TableBody.module.css';

export const TableBody: FC<ITableBodyProps> = (props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <div {...anotherProps} className={classNames(s.table_body, [className])}>
      {children}
    </div>
  );
};
