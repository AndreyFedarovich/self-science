import {
	forwardRef,
	InputHTMLAttributes,
	ReactElement,
	LegacyRef,
} from 'react';
import cn from 'classnames';
import InputError from 'components/FormComponents/FieldError';
import FieldLabel from 'components/FormComponents/FieldLabel';
import Caret from './Caret';
import styles from './DropdownInput.module.scss';

interface DropdownInputProps extends InputHTMLAttributes<HTMLDivElement> {
	label?: string;
	error?: string;
	hasError?: boolean;
	isDisabled?: boolean;
	icon?: ReactElement;
	localSearchValue?: string;
	isOpen: boolean;
	name: string;
}

const DropdownInput = (
	{
		label,
		placeholder,
		error,
		hasError = false,
		isDisabled = false,
		name,
		isOpen,
		...props
	}: DropdownInputProps,
	ref: LegacyRef<HTMLInputElement> | undefined,
) => (
	<div className={cn(styles.root, { [styles.error]: error })}>
		<div className={styles.wrap}>
			{label && <FieldLabel name={name} text={label} />}
			<div className={styles.inputWrap}>
				<input
					id={name}
					ref={ref}
					disabled={isDisabled}
					className={styles.input}
					placeholder={placeholder}
					{...props}
				/>
				<Caret isOpen={isOpen} />
			</div>
		</div>
		{hasError ? <InputError error={error} /> : null}
	</div>
);

export default forwardRef(DropdownInput);
