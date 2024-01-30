import { useRef } from 'react';
import { useInitialEffect } from 'src/shared/hooks';

export const useTableScroll = () => {
  const refTable = useRef<HTMLDivElement | null>(null);
  const refHeader = useRef<HTMLDivElement | null>(null);

  useInitialEffect(() => {
    const table = refTable.current;
    const header = refHeader.current;

    if (!table || !header) return;

    const tableScroll = () => {
      header.scrollLeft = table.scrollLeft;

      if (header.scrollLeft !== table.scrollLeft) {
        table.scrollLeft = header.scrollLeft;
      }
    };

    table.addEventListener('scroll', tableScroll);

    return () => {
      table.removeEventListener('scroll', tableScroll);
    };
  });

  return {
    refTable,
    refHeader,
  };
};
