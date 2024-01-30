import { ChangeEvent, FC, memo, useCallback } from 'react';
import { HStack } from 'src/shared/lib/ui/containers';
import { Input, useInput } from 'src/shared/lib/ui/input';
import { Button } from 'src/shared/lib/ui/button';
import { Loader } from 'src/shared/lib/ui/loader';
import { classNames } from 'src/shared/lib/class-names';
import type { IUsersFilterProps } from './UsersFilter.interface';
import s from './UsersFilter.module.css';

export const UsersFilter: FC<IUsersFilterProps> = memo((props) => {
  const { className, fetchMoreUsers, filterUserByStr, debouncedFilterByStr, isMoreLoading, ...anotherProps } = props;
  const input = useInput('');
  const { changeActive, changeValue } = input;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      input.onChange(e);
      debouncedFilterByStr(e.target.value);
    },
    [debouncedFilterByStr, input],
  );

  const resetFilters = useCallback(() => {
    filterUserByStr('');
    changeValue('');
    changeActive(false);
  }, [filterUserByStr, changeValue, changeActive]);

  return (
    <HStack {...anotherProps} className={classNames(s.users_filter, [className])}>
      <Input {...input} onChange={onChange} className={s.input} placeholder="Введите имя" />
      <Button className={s.margin_left} onClick={fetchMoreUsers} text="Загрузить еще" />
      <Button className={s.margin_left} onClick={resetFilters} dsColor="secondary" text="Сбросить фильтр" />
      {isMoreLoading && <Loader className={s.margin_left} />}
    </HStack>
  );
});
