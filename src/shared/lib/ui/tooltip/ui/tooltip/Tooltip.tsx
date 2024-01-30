import { FC, memo, useEffect, useState } from 'react';
import { classNames } from '../../../../class-names';
import type { ITooltipProps } from './Tooltip.interface';
import s from './Tooltip.module.css';
import { ANIMATION_DURATION_MS } from 'src/shared/consts';

export const Tooltip: FC<ITooltipProps> = memo((props) => {
  const { className, children, isShow, open = 'bottom', ...anotherProps } = props;
  const [isDisplay, setIsDisplay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isShow) {
      setIsDisplay(true);

      setTimeout(() => {
        setIsVisible(true);
      }, ANIMATION_DURATION_MS / 2);
      return;
    }

    setIsVisible(false);

    setTimeout(() => {
      setIsDisplay(false);
    }, ANIMATION_DURATION_MS);
  }, [isShow]);

  return (
    <div
      {...anotherProps}
      className={classNames(s.tooltip, [className, s[open]], { [s.display]: isDisplay, [s.visible]: isVisible })}
    >
      <div className={s.triangle} />
      {children}
    </div>
  );
});
