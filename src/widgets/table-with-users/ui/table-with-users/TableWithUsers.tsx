import { FC, memo } from 'react';
import { useUsersSlice } from './TableWithUsers.hooks';
import { UsersFilter } from 'src/features/users-filter';
import { UsersTable } from 'src/features/users-table';
import { useInitialEffect } from 'src/shared/hooks';
import { CWidth, Flex } from 'src/shared/lib/ui/containers';
import { Loader } from 'src/shared/lib/ui/loader';
import { Text } from 'src/shared/lib/ui/text';
import { classNames } from 'src/shared/lib/class-names';
import type { ITableWithUsersProps } from './TableWithUsers.interface';
import s from './TableWithUsers.module.css';

export const TableWithUsers: FC<ITableWithUsersProps> = memo((props) => {
  const { className, ...anotherProps } = props;

  const {
    filteredUsers,
    isLoading,
    isMoreLoading,
    error,
    fetchInitUsers,
    fetchMoreUsers,
    filterUserByStr,
    debouncedFilterByStr,
  } = useUsersSlice();

  useInitialEffect(fetchInitUsers);

  if (error) {
    return (
      <Flex className={s.full}>
        <Text title={error} dsColor="danger" tStyle="bold" tSize="big" />
        <Text text="Перезагрузите страницу" tSize="big" />
      </Flex>
    );
  }

  if (isLoading) {
    return (
      <Flex className={s.full}>
        <Loader />
      </Flex>
    );
  }

  return (
    <div {...anotherProps} className={classNames(s.table_with_users, [className])}>
      <CWidth>
        <UsersFilter
          isMoreLoading={isMoreLoading}
          filterUserByStr={filterUserByStr}
          debouncedFilterByStr={debouncedFilterByStr}
          fetchMoreUsers={fetchMoreUsers}
        />
        <UsersTable users={filteredUsers} />
      </CWidth>
    </div>
  );
});
