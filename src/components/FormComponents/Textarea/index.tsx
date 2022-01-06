import { InputHTMLAttributes, memo } from 'react';
import cn from 'classnames';
import FieldError from '../FieldError';
import styles from './Textarea.module.scss';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hasError?: boolean;
  isDisabled?: boolean;
}

function Textarea({
  placeholder,
  error,
  hasError = false,
  isDisabled = false,
  ...props
}: TextAreaProps) {
  return (
    <div className={cn(styles.root, { [styles.error]: error })}>
      <div className={styles.wrap}>
        <textarea
          disabled={isDisabled}
          className={styles.input}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {hasError ? <FieldError error={error} /> : null}
    </div>
  );
}

export default memo(Textarea);
