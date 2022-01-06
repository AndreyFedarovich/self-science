import React, { forwardRef, MutableRefObject } from 'react';
import DropdownOption from '../DropdownOption';
import styles from './DropdownMenu.module.scss';
interface DropdownMenuProps {
  onSelect?: (a: string) => void;
  options: Array<string>;
  setIsOpen: (a: boolean) => void;
  isOpen: boolean;
  isMultiple?: boolean;
  selected?: string[];
}

type DropdownMenuRef = ((instance: HTMLDivElement | null) => void) | MutableRefObject<HTMLDivElement | null> | null

const DropdownMenu =
  ({
    isOpen,
    isMultiple,
    onSelect,
    options,
    setIsOpen,
    selected = [],
  }: DropdownMenuProps, ref: DropdownMenuRef) => (
    <div className={styles.root}>
      {isOpen && (
        <div className={styles.wrap}>
          <div ref={ref} className={styles.options}>
            {!options.length ? (
              <span className={styles.empty}>No results</span>
            ) : (options.map((option, index) => (
              <DropdownOption
                key={option + index}
                option={option}
                options={options}
                onSelect={onSelect}
                setIsOpen={setIsOpen}
                isSelected={selected.includes(option)}
                isMultiple={isMultiple}
                index={index}
                menuRef={ref}
              />
            )))}
          </div>
        </div>
      )}
    </div>
  );

export default forwardRef(DropdownMenu);
