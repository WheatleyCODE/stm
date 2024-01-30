import { FC, memo } from 'react';
import { classNames } from '../../../../class-names';
import { Text } from '../../../text';
import type { IImageLoadProps } from './ImageLoad.interface';
import s from './ImageLoad.module.css';

export const ImageLoad: FC<IImageLoadProps> = memo((props) => {
  const { className, text = 'Загрузка...', ...anotherProps } = props;

  return (
    <div {...anotherProps} className={classNames(s.image_load, [className])}>
      <Text text={text} />
    </div>
  );
});
