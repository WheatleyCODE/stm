import { FC, memo } from 'react';
import { classNames } from '../../../../class-names';
import type { IButtonProps } from './Button.interface';
import s from './Button.module.css';

export const Button: FC<IButtonProps> = memo((props) => {
  const {
    className,
    text,
    bStyle = 'square',
    bSize = 'normal',
    bColor = 'primary',
    minWidth = 60,
    ...anotherProps
  } = props;

  const classes = [className, s[bStyle], s[bSize], s[bColor]];

  return (
    <button {...anotherProps} style={{ minWidth }} className={classNames(s.button, classes)}>
      {text}
    </button>
  );
});
