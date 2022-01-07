export type AnswerType = 'text' | 'range' | 'select';

export type questionType = {
	id: string;
	text?: string;
	isRequired: boolean;
	answerType: AnswerType;
};

export type quizSetStatusType = 'inactive' | 'active';

export type quizSetType = {
	id: string;
	title?: string;
	questions?: questionType[];
	status: quizSetStatusType;
	onClick?: () => void;
};
