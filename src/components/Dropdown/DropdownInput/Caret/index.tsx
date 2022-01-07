import cn from 'classnames';
import { memo } from 'react';
import styles from './Caret.module.scss';

type CaretProps = {
	isOpen: boolean;
};

const Caret = ({ isOpen }: CaretProps) => {
	return <span className={cn(styles.root, styles[isOpen ? 'down' : 'up'])} />;
};

export default memo(Caret);
