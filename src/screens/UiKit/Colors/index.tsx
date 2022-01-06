import React, { memo } from 'react';
import copy from 'copy-to-clipboard';
import styles from './Colors.module.scss';

const COLORS = [
  { key: '$codGray', value: '#161616' },
  { key: '$alto', value: '#d3d3d3' },
  { key: '$cuttySark', value: '#52666e' },
  { key: '$dodgerBlue', value: '#397ff3' },
  { key: '$mountainMeadow', value: '#1da88a' },
  { key: '$flamingo', value: '#e9231c' },
];

const Colors = () => {
  const handleSelectColor = (key: string) => () => {
    copy(key);
  };

  return (
    <div className={styles.root}>
      {COLORS.map(({ key, value }) => (
        <button
          key={key}
          className={styles.color}
          onClick={handleSelectColor(key)}
          style={{ backgroundColor: value }}
        />
      ))}
    </div>
  );
};
export default memo(Colors);
