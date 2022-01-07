import React, { ChangeEvent, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createQuestion, updateQuestion } from 'store/quizzes/thunks';
import { QUESTION_TYPES, ANSWER_TYPES } from 'constants/quizzes.constants';
import Dropdown, { DropdownOptionType } from 'components/Dropdown';
import Input from 'components/FormComponents/Input';
import Checkbox from 'components/Checkbox';
import ButtonLink from 'components/Buttons/ButtonLink';
import { AnswerType, questionType } from 'src/types/quizSetTypes';
import styles from './Questions.module.scss';
import RangeFields from './RangeFields';
import { capitalize } from 'src/helpers/string.helpers';

interface HandleChangeQuestion {
	questionId: string;
	isRequired?: boolean;
	questionText?: string;
}

interface QuestionsProps {
	list?: questionType[];
	quizSetId?: string;
}
function Questions({ list, quizSetId }: QuestionsProps) {
	const dispatch = useDispatch();

	const handleChangeQuestion = useCallback(
		({ questionId }: HandleChangeQuestion) =>
			(event: ChangeEvent<HTMLInputElement>) => {
				dispatch(
					updateQuestion({
						quizSetId,
						questionId,
						questionText: event.target.value,
					}),
				);
			},
		[quizSetId],
	);

	const handleChangeRequired = useCallback(
		({ questionId, isRequired }: HandleChangeQuestion) =>
			() => {
				dispatch(
					updateQuestion({
						quizSetId,
						questionId,
						isRequired: !isRequired,
					}),
				);
			},
		[quizSetId],
	);

	const handleSetAnswerType = useCallback(
		questionId => (answerType: AnswerType) => {
			dispatch(
				updateQuestion({
					quizSetId,
					questionId,
					answerType,
				}),
			);
		},
		[quizSetId],
	);

	const handleCreateQuestion = useCallback(() => {
		dispatch(createQuestion(quizSetId as string));
	}, [quizSetId]);

	const getSelectedOptions = (type: AnswerType): DropdownOptionType[] => {
		if (!list) {
			return [];
		}
		const selectedOption = list.find(({ answerType }) => answerType === type);
		const value = capitalize(selectedOption?.answerType as string);
		const key = selectedOption?.id || 'text';
		return [{ value: value, key }];
	};
	return (
		<>
			{list?.map(({ id, text, isRequired, answerType }) => {
				console.log(getSelectedOptions(answerType));

				return (
					<fieldset className={styles.field} key={id}>
						<div className={styles.grid2}>
							<Input
								value={text || ''}
								label="Question"
								placeholder="Question"
								name={`question${id}`}
								onChange={handleChangeQuestion({ questionId: id, isRequired })}
							/>
							<Dropdown
								label="Answer type"
								placeholder="Answer type"
								name={`answerType${id}`}
								options={QUESTION_TYPES}
								onSelect={handleSetAnswerType(id)}
								selectedOptions={getSelectedOptions(answerType)}
							/>
						</div>
						{answerType === ANSWER_TYPES.RANGE && (
							<div className={styles.row}>
								<RangeFields id={id} />
							</div>
						)}
						<div className={styles.panel}>
							<Checkbox
								name={`require${id}`}
								isActive={isRequired}
								label="is required"
								onClick={handleChangeRequired({
									questionId: id,
									isRequired,
								})}
							/>
						</div>
					</fieldset>
				);
			})}
			<div className={styles.addMore}>
				<ButtonLink onClick={handleCreateQuestion} text="+ Add question" />
			</div>
		</>
	);
}

Questions.defaultProps = {
	list: [],
	quizSetId: '',
};

export default memo(Questions);
