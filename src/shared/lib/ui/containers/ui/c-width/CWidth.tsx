import { FC, memo } from 'react';
import { Flex } from '../flex/Flex';
import { Width } from '../width/Width';
import { classNames } from '../../../../class-names';
import type { ICWidthProps } from './CWidth.interface';
import s from './CWidth.module.css';

export const CWidth: FC<ICWidthProps> = memo((props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <Flex {...anotherProps} justify="center" className={classNames(s.flex, [className])}>
      <Width>{children}</Width>
    </Flex>
  );
});
