export const getGridTemplateCols = (arr: unknown[]): string => {
  return arr.map(() => '1fr').join(' ');
};
