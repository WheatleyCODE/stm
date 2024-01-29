import { FC } from 'react';
import { classNames } from '../../../../class-names';
import type { IWidthProps } from './Width.interface';
import s from './Width.module.css';

export const Width: FC<IWidthProps> = (props) => {
  const { className, children, ...anotherProps } = props;

  return (
    <div {...anotherProps} className={classNames(s.width, [className])}>
      {children}
    </div>
  );
};
