import { FC, memo } from 'react';
import { Flex } from 'src/shared/lib/ui/containers';
import { classNames } from 'src/shared/lib/class-names';
import type { ITableColProps } from './TableCol.interface';
import s from './TableCol.module.css';

export const TableCol: FC<ITableColProps> = memo((props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <Flex {...anotherProps} justify="start" align="center" className={classNames(s.table_col, [className])}>
      {children}
    </Flex>
  );
});
