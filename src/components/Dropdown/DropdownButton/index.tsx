import React, {
  forwardRef, ButtonHTMLAttributes, ReactElement, LegacyRef,
} from 'react';
import cn from 'classnames';
import FieldLabel from 'components/FormComponents/FieldLabel';
import Caret from './Caret';
import styles from './DropdownButton.module.scss';

interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  error?: string
  hasError?: boolean
  isDisabled?: boolean
  icon?: ReactElement
  localSearchValue?: string
  isOpen: boolean
  value: string
  name: string
}

const DropdownButton = ({
  label,
  error,
  isDisabled = false,
  name,
  isOpen,
  value,
  ...props
}: DropdownButtonProps, ref: LegacyRef<HTMLButtonElement> | undefined) => (
  <div className={cn(styles.root, { [styles.error]: error })}>
    <div className={styles.wrap}>
      {label && <FieldLabel name={name} text={label} />}
      <button
        ref={ref}
        id={name}
        disabled={isDisabled}
        className={styles.button}
        {...props}
      >
        {value}
        <Caret isOpen={isOpen} />
      </button>
    </div>
  </div>
);

export default forwardRef(DropdownButton);
