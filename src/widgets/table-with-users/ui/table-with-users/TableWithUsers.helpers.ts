import { IUser } from 'src/entities/user';

export const getFilteredUsers = (users: IUser[], str: string) => {
  return [...users].filter((user) =>
    `${user.name.first} ${user.name.last}`.toLocaleLowerCase().includes(str.toLocaleLowerCase()),
  );
};
