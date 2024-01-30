import { FC, memo } from 'react';
import { classNames } from '../../../../class-names';
import type { ITextProps } from './Text.interface';
import s from './Text.module.css';

export const Text: FC<ITextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    textTag: TextTag = 'p',
    titleTag: TitleTag = 'h2',
    dsColor,
    tStyle = 'thin',
    tSize = 'normal',
    ...anotherProps
  } = props;

  const classes = [className, s[tStyle], s[tSize]];

  if (dsColor) {
    classes.push(s[dsColor]);
  }

  return (
    <div {...anotherProps} className={classNames(s.text_container, classes)}>
      {!!title && <TitleTag className={classNames(s.title)}>{title}</TitleTag>}
      {!!text && <TextTag className={classNames(s.text)}>{text}</TextTag>}
    </div>
  );
});
