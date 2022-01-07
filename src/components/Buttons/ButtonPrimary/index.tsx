import React, { memo, ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './ButtonPrimary.module.scss';

export interface ButtonPrimaryProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	children?: ReactNode;
	uiType?: 'default' | 'success' | 'warning';
	isDisabled?: boolean;
}

function ButtonPrimary({
	text,
	children,
	uiType = 'default',
	isDisabled = false,
	...props
}: ButtonPrimaryProps) {
	return (
		<button
			disabled={isDisabled}
			className={cn(styles.root, styles[uiType])}
			{...props}
		>
			{children}
			{text ? <span className={styles.text}>{text}</span> : null}
		</button>
	);
}

export default memo(ButtonPrimary);
