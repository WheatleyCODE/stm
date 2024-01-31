import { IUser } from 'src/entities/user';

export const checkIsLast = (i: number, users: IUser[]): boolean => {
  return i === users.length - 1 && users.length < 15;
};
