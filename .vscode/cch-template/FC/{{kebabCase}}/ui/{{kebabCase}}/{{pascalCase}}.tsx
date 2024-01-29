import { FC, memo } from 'react';
import { classNames } from 'src/shared/lib/class-names';
import type { I{{pascalCase}}Props } from './{{pascalCase}}.interface';
import s from './{{pascalCase}}.module.css';

export const {{pascalCase}}: FC<I{{pascalCase}}Props> = memo((props) => {
  const { className, ...anotherProps } = props;

  return (
    <div {...anotherProps} className={classNames(s.{{snakeCase}}, [className])}>
      {{pascalCase}}
    </div>
  );
});
