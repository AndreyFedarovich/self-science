import React, { memo } from 'react';
import { HProps } from '../InterfaceHeader';
import styles from './H2.module.scss';

function H2({ children }: HProps) {
  return <h2 className={styles.root}>{children}</h2>;
}

export default memo(H2);
