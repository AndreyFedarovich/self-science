import { useEffect, useState } from 'react';
import { QUIZ_SET_STATUSES } from 'constants/quizzes.constants';
import { quizSetType } from 'src/types/quizSetTypes';

const useQuizSetValidation = (quizSet?: quizSetType) => {
	const [shouldShowErrors, setShouldShowErrors] = useState(false);
	const showErrors = () => setShouldShowErrors(true);

	useEffect(() => {
		setShouldShowErrors(false);
	}, [quizSet?.id]);

	const isActiveQuestionSet = quizSet?.status === QUIZ_SET_STATUSES.ACTIVE;

	if (!quizSet || isActiveQuestionSet) {
		return {
			isValidQuestionSet: false,
			validQuestions: [],
			errors: [],
			shouldShowErrors: false,
			showErrors,
		};
	}

	const validQuestions = quizSet?.questions?.filter(({ text }) => text) || [];
	const isValidQuestionsLength = !!validQuestions.length;
	const isValidQuestionSetTitle = !!quizSet.title;
	const errors = [
		!isValidQuestionSetTitle ? 'Name the question set' : '',
		!isValidQuestionsLength ? 'Create as minimum one question' : '',
	].filter(error => error);

	return {
		isValidQuestionSet: !errors.length,
		validQuestions,
		errors: shouldShowErrors ? errors : [],
		shouldShowErrors,
		showErrors,
	};
};

export default useQuizSetValidation;
