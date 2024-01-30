import { FC, memo } from 'react';
import { Text } from '../../../text';
import { classNames } from '../../../../class-names';
import type { IImageErrorProps } from './ImageError.interface';
import s from './ImageError.module.css';

export const ImageError: FC<IImageErrorProps> = memo((props) => {
  const { className, text = 'Ошибка при загрузке картинки =(', ...anotherProps } = props;

  return (
    <div {...anotherProps} className={classNames(s.image_error, [className])}>
      <Text tStyle="bold" text={text} dsColor="danger" />
    </div>
  );
});
