interface onBlurMenuProps {
  target: (EventTarget & Element) | null;
  refs: any[];
  setIsOpen: (a: boolean) => void;
}

export default ({ target, refs, setIsOpen }: onBlurMenuProps) => {
  const elements = [] as Element[];

  refs.forEach((ref) => {
    const { current } = ref;
    elements.push(current);
  });

  if (elements.some((element) => element?.contains(target))) {
    return;
  }

  setIsOpen(false);
};
