import type { Mods } from './classNames.interface';

export const classNames = (cls: string, additional: Array<undefined | string> = [], mods: Mods = {}): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => String(className)),
  ].join(' ');
};
