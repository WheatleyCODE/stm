import { FC } from 'react';
import { getGridTemplateCols } from 'src/shared/lib/utils';
import { classNames } from 'src/shared/lib/class-names';
import type { ITableHeaderProps } from './TableHeader.interface';
import s from './TableHeader.module.css';

export const TableHeader: FC<ITableHeaderProps> = (props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <div
      style={{ gridTemplateColumns: getGridTemplateCols(children) }}
      {...anotherProps}
      className={classNames(s.table_header, [className])}
    >
      {children}
    </div>
  );
};
