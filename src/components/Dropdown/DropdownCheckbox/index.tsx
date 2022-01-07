import React, { memo } from 'react';
import style from './DropdownCheckbox.module.scss';

interface IDropdownCheckboxProps {
	isSelected?: boolean;
}

function DropdownCheckbox({ isSelected }: IDropdownCheckboxProps) {
	return <span className={style.root}>{isSelected ? '-' : '+'}</span>;
}

DropdownCheckbox.defaultProps = {
	isSelected: false,
};

export default memo(DropdownCheckbox);
