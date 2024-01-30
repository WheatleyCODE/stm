import { FC, memo } from 'react';
import { TableHeader, TableCol, TableBody, TableRow } from 'src/entities/table';
import { UserImage } from 'src/entities/user';
import { usersTableHeadCols } from './UsersTable.consts';
import { formatDate } from 'src/shared/lib/utils';
import { Flex } from 'src/shared/lib/ui/containers';
import { Text } from 'src/shared/lib/ui/text';
import { classNames } from 'src/shared/lib/class-names';
import type { IUsersTableProps } from './UsersTable.interface';
import s from './UsersTable.module.css';

const tableHeadCols = usersTableHeadCols.map(({ text, style, size, className }, i) => {
  const classes: string[] = [];

  if (className) {
    classes.push(s[className]);
  }

  return (
    <TableCol className={classNames(s.head_col, classes, { [s.first_col]: i === 0 })}>
      <Text text={text} tStyle={style} tSize={size} />
    </TableCol>
  );
});

export const UsersTable: FC<IUsersTableProps> = memo((props) => {
  const { className, users, ...anotherProps } = props;

  const tableRows = users.map((user, i) => {
    return (
      <TableRow className={i === 0 ? s.first_row : undefined}>
        <TableCol className={classNames(s.col, [s.first_col, s.name_col])}>
          <Text text={`${user.name.first} ${user.name.last}`} tSize="small" />
        </TableCol>

        <TableCol className={classNames(s.col, [s.image_col])}>
          <UserImage
            thumbnailSrc={user.picture.thumbnail}
            thumbnailAlt={user.name.first}
            largeSrc={user.picture.large}
            largeAlt={user.name.first}
          />
        </TableCol>

        <TableCol className={classNames(s.col, [s.location_col])}>
          <Text text={`${user.location.state} ${user.location.city}`} tSize="small" />
        </TableCol>

        <TableCol className={classNames(s.col, [s.email_col])}>
          <Text text={user.email} tSize="small" />
        </TableCol>

        <TableCol className={classNames(s.col, [s.phone_col])}>
          <Text text={user.phone} tSize="small" />
        </TableCol>

        <TableCol className={classNames(s.col, [s.register_col])}>
          <Text text={formatDate(user.registered.date)} tSize="small" />
        </TableCol>
      </TableRow>
    );
  });

  return (
    <div {...anotherProps} className={classNames(s.users_table, [className])}>
      <div className={s.overflow}>
        <TableHeader className={s.sticky}>{tableHeadCols}</TableHeader>
        <TableBody>{tableRows}</TableBody>

        {!users.length && (
          <Flex className={s.empty_message}>
            <Text title="Ничего не найдено" tStyle="bold" />
          </Flex>
        )}
      </div>
    </div>
  );
});
