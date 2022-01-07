import React, { ReactNode, memo } from 'react';
import cn from 'classnames';
import styles from './WrapContent.module.scss';

interface WrapContentProps {
  children: ReactNode;
  className?: string;
}

const WrapContent = ({ children, className }: WrapContentProps) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};

export default memo(WrapContent);
