import { FC, memo } from 'react';
import { classNames } from '../../../../class-names';
import type { IInputPlaceholderProps } from './InputPlaceholder.interface';
import s from './InputPlaceholder.module.css';

export const InputPlaceholder: FC<IInputPlaceholderProps> = memo((props) => {
  const { className, placeholder, isActive, ...anotherProps } = props;

  return (
    <div {...anotherProps} className={classNames(s.input_placeholder, [className], { [s.active]: isActive })}>
      {placeholder}
    </div>
  );
});
