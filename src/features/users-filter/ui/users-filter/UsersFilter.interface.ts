export interface IUsersFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  fetchMoreUsers: () => void;
  isMoreLoading: boolean;
  filterUserByStr: (value: string) => void;
  debouncedFilterByStr: (value: string) => void;
}
