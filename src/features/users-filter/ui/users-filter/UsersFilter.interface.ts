export interface IUsersFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  fetchMoreUsers: () => void;
  isMoreLoading: boolean;
  filterUsersByStr: (value: string) => void;
  debouncedFilterUsersByStr: (value: string) => void;
}
