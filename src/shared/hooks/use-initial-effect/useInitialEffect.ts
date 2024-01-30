import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    callback();
    // * One times
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
