import { memo } from 'react';
import { TableWithUsers } from 'src/widgets/table-with-users';
import './styles/index.css';

export const App = memo(() => {
  return (
    <div className="App">
      <TableWithUsers />
    </div>
  );
});
