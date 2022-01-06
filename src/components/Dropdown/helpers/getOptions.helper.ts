interface getOptionsProps {
  searchValue?: string,
  options: string[]
}
export default ({ searchValue, options }: getOptionsProps) => {
  if (!searchValue) {
    return options;
  }

  return options.filter((option: string) => option.toLowerCase().includes(searchValue.toLowerCase()));
};
