export const getDataWithKeys = (data: Record<string, string | number>[], prefix?: string) => (
  data.map((item, i) => ({ ...item, key: `${prefix || ''}-${i}` }))
);
