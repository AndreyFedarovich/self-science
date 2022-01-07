import React, {
	forwardRef,
	MutableRefObject,
	LegacyRef,
	FocusEvent,
} from 'react';
import cn from 'classnames';
import onBlurMenu from '../helpers/blurMenu.helper';
import DropdownCheckbox from '../DropdownCheckbox';
import styles from './DropdownOption.module.scss';

interface DropdownOptionProps {
	onSelect?: (a: string) => void;
	value: string;
	optionsLength: number;
	setIsOpen: (a: boolean) => void;
	isMultiple?: boolean;
	isSelected: boolean;
	index: number;
	menuRef:
		| ((instance: HTMLDivElement | null) => void)
		| MutableRefObject<HTMLDivElement | null>
		| null;
	searchKey: string;
}

type DropdownOptionRef = LegacyRef<HTMLButtonElement> | undefined;

const DropdownOption = (
	{
		index,
		menuRef,
		isMultiple,
		onSelect,
		value,
		searchKey,
		optionsLength,
		setIsOpen,
		isSelected,
	}: DropdownOptionProps,
	ref: DropdownOptionRef,
) => {
	const handlePress = () => {
		onSelect?.(searchKey);

		if (!isMultiple) {
			setIsOpen(false);
		}
	};

	const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
		if (index === optionsLength - 1) {
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
			{isMultiple && (
				<span className={styles.checkbox}>
					<DropdownCheckbox isSelected={isSelected} />
				</span>
			)}
			{value}
		</button>
	);
};

export default forwardRef(DropdownOption);
