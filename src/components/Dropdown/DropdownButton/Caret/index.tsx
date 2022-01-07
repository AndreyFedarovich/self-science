import React, { memo } from 'react';
import cn from 'classnames';
import styles from './Caret.module.scss';

type CaretProps = {
	isOpen: boolean;
};

function Caret({ isOpen }: CaretProps) {
	return <span className={cn(styles.root, styles[isOpen ? 'down' : 'up'])} />;
}

export default memo(Caret);
