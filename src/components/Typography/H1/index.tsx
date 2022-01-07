import React, { memo } from 'react';
import { HProps } from '../InterfaceHeader';
import styles from './H1.module.scss';

const H1 = ({ children }: HProps) => <h1 className={styles.root}>{children}</h1>;

export default memo(H1);
