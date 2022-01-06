import React, { memo, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './ButtonLink.module.scss';

export interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
  isDisabled?: boolean;
}

function ButtonLink({
  text, children, isDisabled = false, ...props
}: ButtonLinkProps) {
  return (
    <button disabled={isDisabled} className={styles.root} {...props}>
      {children}
      {text ? <span className={styles.text}>{text}</span> : null}
    </button>
  );
}

export default memo(ButtonLink);
