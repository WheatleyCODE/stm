import { ChangeEvent, useCallback, useRef, useState } from 'react';
import type { IUseInputResult } from './Input.interface';

export const useInput = <T = unknown>(initValue: T): IUseInputResult<T> => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(initValue);
  const [isFocus, setIsFocus] = useState(false);
  const [isActive, setIsActive] = useState(!!initValue);
  const [isTouched, setIsTouched] = useState(false);

  const onBlur = useCallback(() => {
    setIsTouched(true);
    setIsFocus(false);

    if (!value) setIsActive(false);
  }, [value]);

  const onFocus = useCallback(() => {
    setIsFocus(true);
    setIsActive(true);
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  }, []);

  const changeFocus = useCallback((boolean: boolean) => {
    const el = inputRef.current;
    if (!el) return;

    boolean ? el.focus() : el.blur();

    setIsFocus(boolean);
  }, []);

  const changeActive = useCallback((boolean: boolean) => {
    setIsActive(boolean);
  }, []);

  const changeValue = useCallback((string: T) => {
    setValue(string);
  }, []);

  return {
    value,
    isFocus,
    isActive,
    isTouched,
    onChange,
    onBlur,
    onFocus,
    changeValue,
    changeFocus,
    changeActive,
    inputRef,
  };
};
