import { FC, memo, useCallback, useRef } from 'react';
import { Image } from 'src/shared/lib/ui/image';
import { Tooltip, TooltipOpen } from 'src/shared/lib/ui/tooltip';
import { useDelayHover } from 'src/shared/hooks';
import { classNames } from 'src/shared/lib/class-names';
import type { IUserImageProps } from './UserImage.interface';
import s from './UserImage.module.css';

export const UserImage: FC<IUserImageProps> = memo((props) => {
  const { className, thumbnailSrc, thumbnailAlt, largeSrc, largeAlt, ...anotherProps } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const { isShow, onMouseEnter, onMouseLeave, onMouseMove } = useDelayHover(false, 500, 300, 300);

  const checkPosition = useCallback(() => {
    if (!ref.current) return;

    const { height } = document.body.getBoundingClientRect();
    const { top } = ref.current.getBoundingClientRect();

    return height / 2 > top;
  }, []);

  const open: TooltipOpen = checkPosition() ? 'bottom' : 'top';

  return (
    <div {...anotherProps} ref={ref} className={classNames(s.user_image, [className])}>
      <Image
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        className={s.thumbnail}
        src={thumbnailSrc}
        alt={thumbnailAlt}
      />

      <div className={s.tooltip_container}>
        <Tooltip
          open={open}
          className={classNames(s.tooltip, [s[open]])}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          isShow={isShow}
        >
          <Image className={s.large} src={largeSrc} alt={largeAlt} />
        </Tooltip>
      </div>
    </div>
  );
});
