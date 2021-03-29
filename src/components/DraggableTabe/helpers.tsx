export const getDataWithKeys = (data: Record<string, string | number>[]) => (
  data.map((item, i) => ({ ...item, key: i }))
);
