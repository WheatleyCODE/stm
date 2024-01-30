import { FC, memo, useLayoutEffect, useState } from 'react';
import { classNames } from '../../../../class-names';
import { ImageError } from '../image-error/ImageError';
import { ImageLoad } from '../image-load/ImageLoad';
import type { IImageProps } from './Image.interface';
import s from './Image.module.css';

export const Image: FC<IImageProps> = memo((props) => {
  const { className, src, alt = 'image', errorFallback, fallback, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = document.createElement('img');

    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading) {
    if (fallback) return fallback;
    return <ImageLoad {...otherProps} />;
  }

  if (hasError) {
    if (errorFallback) return errorFallback;
    return <ImageError {...otherProps} />;
  }

  return <img {...otherProps} className={classNames(s.image, [className])} src={src} alt={alt} />;
});
