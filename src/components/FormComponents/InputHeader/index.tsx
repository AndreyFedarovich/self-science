import React, {
	ChangeEvent,
	InputHTMLAttributes,
	ForwardedRef,
	forwardRef,
	LegacyRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { updateQuizSetTitle } from 'store/quizzes/thunks';
import styles from './InputHeader.module.scss';

interface InputHeaderProps extends InputHTMLAttributes<HTMLInputElement> {
	quizSetId?: string;
	name?: string;
}

type InputHeaderRef = LegacyRef<HTMLInputElement> | undefined;

const InputHeader = (
	{ name, quizSetId, ...props }: InputHeaderProps,
	ref: InputHeaderRef,
) => {
	const dispatch = useDispatch();

	const handleChangeSetTitle = (event: ChangeEvent<HTMLInputElement>) => {
		if (!quizSetId) {
			return;
		}

		dispatch(
			updateQuizSetTitle({
				quizSetId: quizSetId as string,
				title: event.target.value,
			}),
		);
	};

	return (
		<input
			ref={ref as ForwardedRef<HTMLInputElement>}
			className={styles.root}
			name={name}
			onChange={handleChangeSetTitle}
			placeholder="Untitled"
			{...props}
		/>
	);
};

export default forwardRef(InputHeader);
