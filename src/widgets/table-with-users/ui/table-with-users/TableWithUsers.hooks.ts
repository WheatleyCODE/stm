import { useCallback, useState } from 'react';
import { UsersService } from '../../model/service/UsersService';
import { IUser } from 'src/entities/user';
import { useDebounce } from 'src/shared/hooks';
import { getFilteredUsers } from './TableWithUsers.helpers';

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
      const users = await UsersService.fetchUsers(15);

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
      const users = await UsersService.fetchUsers(15);

      setIsMoreLoading(false);
      setUsers((p) => [...p, ...users]);
      setFilteredUsers((p) => getFilteredUsers([...p, ...users], filterStr));
    } catch (e) {
      console.error(e);
      setError('Всё сломалось!');
    }
  }, [filterStr]);

  const filterUserByStr = useCallback(
    (value: string) => {
      setFilteredUsers(getFilteredUsers(users, value));
      setFilterStr(value);
    },
    [users],
  );

  const debouncedFilterByStr = useDebounce(filterUserByStr, 300);

  return {
    users,
    filteredUsers,
    filterStr,
    isLoading,
    isMoreLoading,
    error,
    fetchInitUsers,
    fetchMoreUsers,
    filterUserByStr,
    debouncedFilterByStr,
  };
};
