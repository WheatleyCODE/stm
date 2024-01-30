import type { IUserTableHeadCol } from './UsersTable.interface';

export const usersTableHeadCols: IUserTableHeadCol[] = [
  {
    text: 'Имя Фамилия',
    size: 'small',
    style: 'bold',
  },
  {
    text: 'Картинка',
    size: 'small',
    style: 'bold',
    className: 'image_col',
  },
  {
    text: 'Локация',
    size: 'small',
    style: 'bold',
  },
  {
    text: 'Почта',
    size: 'small',
    style: 'bold',
    className: 'email_col',
  },
  {
    text: 'Телефон',
    size: 'small',
    style: 'bold',
    className: 'phone_col',
  },
  {
    text: 'Дата регистрации',
    size: 'small',
    style: 'bold',
    className: 'register_col',
  },
];
