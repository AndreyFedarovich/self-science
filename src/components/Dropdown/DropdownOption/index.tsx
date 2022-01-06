import React, { forwardRef, MutableRefObject, LegacyRef, FocusEvent } from 'react';
import cn from 'classnames';
import onBlurMenu from '../helpers/blurMenu.helper';
import DropdownCheckbox from '../DropdownCheckbox';
import styles from './DropdownOption.module.scss';

interface DropdownOptionProps {
  onSelect?: (a: string) => void;
  index: number;
  option: string;
  options: Array<string>;
  setIsOpen: (a: boolean) => void;
  isMultiple?: boolean;
  isSelected: boolean;
  menuRef:
  | ((instance: HTMLDivElement | null) => void)
  | MutableRefObject<HTMLDivElement | null>
  | null;
}

type DropdownOptionRef = LegacyRef<HTMLButtonElement> | undefined

const DropdownOption =
  ({
    index,
    menuRef,
    isMultiple,
    onSelect,
    option,
    options,
    setIsOpen,
    isSelected,
  }: DropdownOptionProps,
    ref: DropdownOptionRef,
  ) => {
    const handlePress = () => {
      onSelect?.(option);

      if (!isMultiple) {
        setIsOpen(false);
      }
    };

    const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
      if (index === options.length - 1) {
        onBlurMenu({
          target: event.relatedTarget,
          refs: [menuRef],
          setIsOpen,
        });
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(styles.option, { [styles.active]: isSelected })}
        onClick={handlePress}
        onBlur={handleBlur}
      >
        {isMultiple && <span className={styles.checkbox}><DropdownCheckbox isSelected={isSelected} /></span>}
        {option}
      </button>
    );
  };

export default forwardRef(DropdownOption);
