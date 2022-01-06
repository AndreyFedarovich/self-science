import {
  forwardRef, InputHTMLAttributes, ReactElement, LegacyRef
} from 'react';
import cn from 'classnames';

import InputError from '../FieldError';
import FieldLabel from '../FieldLabel';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  icon?: ReactElement,
  name?: string;
  placeholder?: string;
}

type InputRef = LegacyRef<HTMLInputElement> | undefined

const Input = ({
  label,
  placeholder = '',
  error,
  hasError = false,
  isDisabled = false,
  name = '',
  ...props
}: InputProps, ref: InputRef) => (
  <div className={cn(styles.root, { [styles.error]: error })}>
    <div className={styles.wrap}>
      {label && <FieldLabel name={name} text={label} />}
      <input
        id={name}
        ref={ref}
        disabled={isDisabled}
        className={styles.input}
        placeholder={placeholder}
        {...props}
      />
    </div>
    {hasError ? <InputError error={error} /> : null}
  </div>
);

export default forwardRef(Input);
