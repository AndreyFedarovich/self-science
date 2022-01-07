import { DropdownOptionType } from '..';

interface OptionsProps<T> {
  searchValue?: string;
  options: T[];
}

export default ({ searchValue, options }: OptionsProps<DropdownOptionType>) => {
  if (!searchValue) {
    return options;
  }

  return options.filter(({ key }) =>
    key.toLowerCase().includes(searchValue.toLowerCase()),
  );
};
