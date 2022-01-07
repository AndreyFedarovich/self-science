import { memo } from 'react';

import styles from './FieldError.module.scss';

interface FieldErrorProps {
  error?: string;
}

const FieldError = ({ error }: FieldErrorProps) =>
  <span className={styles.root}>{error}</span>;

export default memo(FieldError);
