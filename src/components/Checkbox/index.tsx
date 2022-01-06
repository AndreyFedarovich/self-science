import React, { ButtonHTMLAttributes, memo } from 'react';
import cn from 'classnames';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  isActive?: boolean;
}

const Checkbox = ({
  label, isActive = false, ...props
}: CheckboxProps) => (
  <button
    className={cn(styles.root, { [styles.active]: isActive })}
    {...props}
  >
    <span className={styles.checkbox} />
    {label && <span className={styles.label}>{label}</span>}
  </button>
);


export default memo(Checkbox);
