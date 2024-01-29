import { MutableRefObject } from 'react';
import type { IDSColors } from '../../../../types';

export interface IUseInputResult<T> {
  value: T;
  isFocus: boolean;
  isActive: boolean;
  isTouched: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  changeValue: (string: T) => void;
  changeFocus: (boolean: boolean) => void;
  changeActive: (boolean: boolean) => void;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

export interface IInputProps<T = string> extends WithHookResult<HTMLInputElement, IUseInputResult<T>>, IDSColors {
  minWidth?: string | number;
  placeholder?: string;
  type?: string;
}
