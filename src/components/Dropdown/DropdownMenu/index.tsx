import React, { forwardRef, MutableRefObject } from 'react';
import { DropdownOptionType } from '..';
import DropdownOption from '../DropdownOption';
import styles from './DropdownMenu.module.scss';
interface DropdownMenuProps {
	onSelect?: (a: string) => void;
	options: DropdownOptionType[];
	setIsOpen: (a: boolean) => void;
	isOpen: boolean;
	isMultiple?: boolean;
	selectedOptions?: DropdownOptionType[];
}

type DropdownMenuRef =
	| ((instance: HTMLDivElement | null) => void)
	| MutableRefObject<HTMLDivElement | null>
	| null;

const checkIsSelectedOption = (
	selectedOptions: DropdownOptionType[],
	key: string,
) => selectedOptions.findIndex(({ key: optionKey }) => optionKey === key) >= 0;

const DropdownMenu = (
	{
		isOpen,
		isMultiple,
		onSelect,
		options,
		setIsOpen,
		selectedOptions = [],
	}: DropdownMenuProps,
	ref: DropdownMenuRef,
) => (
	<div className={styles.root}>
		{isOpen && (
			<div className={styles.wrap}>
				<div ref={ref} className={styles.options}>
					{!options.length ? (
						<span className={styles.empty}>No results</span>
					) : (
						options.map(({ key, value }, index) => (
							<DropdownOption
								key={key}
								searchKey={key}
								value={value}
								optionsLength={options.length}
								onSelect={onSelect}
								setIsOpen={setIsOpen}
								isSelected={checkIsSelectedOption(selectedOptions, key)}
								isMultiple={isMultiple}
								index={index}
								menuRef={ref}
							/>
						))
					)}
				</div>
			</div>
		)}
	</div>
);

export default forwardRef(DropdownMenu);
