import React, { memo } from 'react';
import { HProps } from '../InterfaceHeader';
import styles from './H3.module.scss';

function H3({ children }: HProps) {
  return <h3 className={styles.root}>{children}</h3>;
}

export default memo(H3);
