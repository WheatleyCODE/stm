import { useCallback, useState } from 'react';
import { UsersService } from '../../model/services/UsersService';
import { useDebounce } from 'src/shared/hooks';
import { getFilteredUsers } from './TableWithUsers.helpers';
import { FETCH_USER_COUNT } from './TableWithUsers.consts';
import type { IUser } from 'src/entities/user';

export const useUsersSlice = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [filterStr, setFilterStr] = useState('');

  const fetchInitUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const users = await UsersService.fetchUsers(FETCH_USER_COUNT);

      setIsLoading(false);
      setUsers(users);
      setFilteredUsers(users);
    } catch (e) {
      console.error(e);
      setError('Всё сломалось!');
    }
  }, []);

  const fetchMoreUsers = useCallback(async () => {
    try {
      setIsMoreLoading(true);
      const users = await UsersService.fetchUsers(FETCH_USER_COUNT);

      setIsMoreLoading(false);
      setUsers((p) => [...p, ...users]);
      setFilteredUsers((p) => getFilteredUsers([...p, ...users], filterStr));
    } catch (e) {
      console.error(e);
      setError('Всё сломалось!');
    }
  }, [filterStr]);

  const filterUsersByStr = useCallback(
    (value: string) => {
      setFilteredUsers(getFilteredUsers(users, value));
      setFilterStr(value);
    },
    [users],
  );

  const debouncedFilterUsersByStr = useDebounce(filterUsersByStr, 300);

  return {
    users,
    filteredUsers,
    filterStr,
    isLoading,
    isMoreLoading,
    error,
    fetchInitUsers,
    fetchMoreUsers,
    filterUsersByStr,
    debouncedFilterUsersByStr,
  };
};
