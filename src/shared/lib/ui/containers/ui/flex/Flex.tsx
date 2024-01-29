import { FC } from 'react';
import { classNames } from '../../../../class-names';
import type { IFlexProps } from './Flex.interface';
import s from './Flex.module.css';

export const Flex: FC<IFlexProps> = (props) => {
  const { className, children, justify = 'center', align = 'center', direction = 'row', ...anotherProps } = props;

  const classes = Object.entries({ justify, align, direction }).map(([key, val]) => s[`${key}_${val}`]);

  return (
    <div {...anotherProps} className={classNames(s.flex, [className, ...classes])}>
      {children}
    </div>
  );
};
