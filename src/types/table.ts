export type ColumnsCommonProps = {
  filter: {
    currentFilter: Partial<{ search: string; by: string; }>;
  },
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
};
