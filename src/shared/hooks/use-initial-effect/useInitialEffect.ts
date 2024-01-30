import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    callback();
    // * Once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
