import { FC, MouseEvent, memo, useCallback } from 'react';
import { InputPlaceholder } from '../input-placeholder/InputPlaceholder';
import { classNames } from '../../../../class-names';
import type { IInputProps } from './Input.interface';
import s from './Input.module.css';

export const Input: FC<IInputProps> = memo((props) => {
  const {
    className,
    dsColor = 'primary',
    changeFocus,
    isFocus,
    isTouched,
    changeActive,
    changeValue,
    inputRef,
    placeholder,
    isActive,
    minWidth = 100,
    ...anotherProps
  } = props;
  const classes = [className, s[dsColor]];

  const focusOnInput = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      changeFocus(true);
    },
    [changeFocus],
  );

  return (
    <div className={s.input_container}>
      <input ref={inputRef} style={{ minWidth }} {...anotherProps} className={classNames(s.input, classes)} />
      {placeholder && <InputPlaceholder onMouseDown={focusOnInput} placeholder={placeholder} isActive={isActive} />}
    </div>
  );
});
