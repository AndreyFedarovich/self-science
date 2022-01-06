import React from 'react';
import type { ReactElement } from 'react';
import Sidebar from 'components/Sidebar';
import styles from './DashboardLayout.module.scss';

export const getDashboardLayout = (page: ReactElement) => (
  <div className={styles.root}>
    <Sidebar />
    {page}
  </div>
);
