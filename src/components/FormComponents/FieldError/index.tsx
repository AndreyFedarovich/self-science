import { memo } from 'react';

import styles from './FieldError.module.scss';

interface FieldErrorProps {
  error?: string;
}

function FieldError({ error }: FieldErrorProps) {
  return (
    <span className={styles.root}>
      {error}
    </span>
  );
}

export default memo(FieldError);
