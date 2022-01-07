import { useEffect, useCallback } from 'react';
import onBlurMenu from '../helpers/blurMenu.helper';

interface MenuCloseListenerProps {
	refs: any[];
	setIsOpen: (a: boolean) => void;
	isOpen: boolean;
}

export default function useMenuListener({
	refs,
	setIsOpen,
	isOpen,
}: MenuCloseListenerProps) {
	const handleClick = useCallback(
		event => {
			onBlurMenu({
				target: event.target,
				refs,
				setIsOpen,
			});
		},
		[refs, setIsOpen],
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClick);
		}

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [isOpen]);
}
