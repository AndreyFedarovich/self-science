import React, { memo } from 'react';
import styles from './FieldLabel.module.scss';

interface FieldLabelProps {
  name?: string;
  text: string
}

function FieldLabel({ name, text }: FieldLabelProps) {
  return <label className={styles.root} htmlFor={name}>{text}</label>;
}

FieldLabel.propTypes = {};

export default memo(FieldLabel);
