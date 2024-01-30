import type { IUser } from 'src/entities/user';
import { TextSize, TextStyle } from 'src/shared/lib/ui/text';

export interface IUserTableHeadCol {
  text: string;
  style: TextStyle;
  size: TextSize;
  className?: string;
}

export interface IUsersTableProps extends React.HTMLAttributes<HTMLDivElement> {
  users: IUser[];
}
