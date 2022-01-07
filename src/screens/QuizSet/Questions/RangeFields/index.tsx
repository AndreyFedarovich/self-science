import React, { memo } from 'react';
import Input from 'components/FormComponents/Input';
import styles from './RangeFields.module.scss';

interface RangeFieldsProps {
  id: string
}

const RangeFields = ({ id }: RangeFieldsProps) => (
  <div className={styles.root}>
    <Input
      value={0}
      label="Min value"
      placeholder="Min value"
      name={`question${id}min`}
      onChange={() => null}
    />
    <Input
      value={10}
      label="Max value"
      placeholder="Max value"
      name={`question${id}max`}
      onChange={() => null}
    />
  </div>
);

export default memo(RangeFields);
