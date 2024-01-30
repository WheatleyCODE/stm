import { FC } from 'react';
import { classNames } from 'src/shared/lib/class-names';
import type { ITableRowProps } from './TableRow.interface';
import s from './TableRow.module.css';

export const TableRow: FC<ITableRowProps> = (props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <div {...anotherProps} className={classNames(s.table_row, [className])}>
      {children}
    </div>
  );
};
