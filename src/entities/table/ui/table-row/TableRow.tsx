import { FC } from 'react';
import { classNames } from 'src/shared/lib/class-names';
import type { ITableRowProps } from './TableRow.interface';
import s from './TableRow.module.css';
import { getGridTemplateCols } from 'src/shared/lib/utils';

export const TableRow: FC<ITableRowProps> = (props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <div
      style={{ gridTemplateColumns: getGridTemplateCols(children) }}
      {...anotherProps}
      className={classNames(s.table_row, [className])}
    >
      {children}
    </div>
  );
};
