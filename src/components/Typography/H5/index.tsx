import React, { memo } from 'react';
import cn from 'classnames';
import { HProps } from '../InterfaceHeader';
import styles from './H5.module.scss';

function H5({ children, className }: HProps) {
  return <h5 className={cn(styles.root, className)}>{children}</h5>;
}

export default memo(H5);
