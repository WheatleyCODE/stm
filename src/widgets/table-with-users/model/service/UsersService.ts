import type { IUser, IUsersResponse } from 'src/entities/user';

export class UsersService {
  static async fetchUsers(count: number): Promise<IUser[]> {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data: IUsersResponse = await res.json();

    return data.results;
  }
}
