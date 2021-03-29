import { OptionData } from 'rc-select/es/interface';

export const getFormItemMeta = (
  fieldKey: number,
  state: Record<string, string>,
  units: Record<string, string>,
  options: OptionData[],
) => {
  const unit = units[state[fieldKey]];
  const currentOptions: OptionData[] = options
    .filter(({ label }) => !Object.values(state).find((value) => value === label));

  return {
    currentOptions,
    unit,
  };
};
