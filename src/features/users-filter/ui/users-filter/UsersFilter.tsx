import { ChangeEvent, FC, memo, useCallback } from 'react';
import { HStack } from 'src/shared/lib/ui/containers';
import { Input, useInput } from 'src/shared/lib/ui/input';
import { Button } from 'src/shared/lib/ui/button';
import { Loader } from 'src/shared/lib/ui/loader';
import { classNames } from 'src/shared/lib/class-names';
import type { IUsersFilterProps } from './UsersFilter.interface';
import s from './UsersFilter.module.css';

export const UsersFilter: FC<IUsersFilterProps> = memo((props) => {
  const { className, fetchMoreUsers, filterUsersByStr, debouncedFilterUsersByStr, isMoreLoading, ...anotherProps } =
    props;
  const input = useInput('');
  const { changeActive, changeValue } = input;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      input.onChange(e);
      debouncedFilterUsersByStr(e.target.value);
    },
    [debouncedFilterUsersByStr, input],
  );

  const resetFilters = useCallback(() => {
    filterUsersByStr('');
    changeValue('');
    changeActive(false);
  }, [filterUsersByStr, changeValue, changeActive]);

  return (
    <HStack {...anotherProps} className={classNames(s.users_filter, [className])}>
      <Input {...input} onChange={onChange} className={s.input} placeholder="Введите имя" />

      <Button className={s.load} onClick={fetchMoreUsers} text="Загрузить еще" />
      <Button className={s.reset} onClick={resetFilters} dsColor="secondary" text="Сбросить фильтр" />

      {isMoreLoading && <Loader className={s.loader} />}
    </HStack>
  );
});
