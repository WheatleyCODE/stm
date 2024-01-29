import { FC, memo } from 'react';
import { classNames } from '../../../../class-names';
import type { ILoaderProps } from './Loader.interface';
import s from './Loader.module.css';

export const Loader: FC<ILoaderProps> = memo((props) => {
  const { className, ...anotherProps } = props;

  return <div {...anotherProps} className={classNames(s.loader, [className])} />;
});
