import produce from 'immer';
import { QUIZ_SET_STATUSES } from 'constants/quizzes.constants';
import { quizSetStatusType, quizSetType } from 'src/types/quizSetTypes';
import { AppDispatch, RootState } from '../store';
import { setQuizSets } from './actions';

const defaultQuestion = {
  id: '0',
  text: '',
  isRequired: false,
};

export const createQuizSet = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { quizSets } = getState().quizzes;
  const id = `${quizSets.length + 1}`;
  const newQuizSet = {
    id,
    questions: [defaultQuestion],
    status: QUIZ_SET_STATUSES.INACTIVE,
  };

  const newQuizzesSets = [newQuizSet, ...quizSets];
  dispatch(setQuizSets(newQuizzesSets as quizSetType[]));

  return id;
};

export const toggleQuizSetStatus = (quizSetId: string, status: quizSetStatusType) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { quizSets } = getState().quizzes;
  const quizSetIndex = quizSets.findIndex(({ id }) => id === quizSetId);

  const nextState = produce(quizSets, (draftQuizSets) => {
    draftQuizSets[quizSetIndex].status = status;
  });
  dispatch(setQuizSets(nextState));
};

export const activateQuizSet = (questionSetId: string) => (dispatch: AppDispatch) => {
  dispatch(toggleQuizSetStatus(questionSetId, QUIZ_SET_STATUSES.ACTIVE));
};

export const deactivateQuizSet = (questionSetId: string) => (dispatch: AppDispatch) => {
  dispatch(toggleQuizSetStatus(questionSetId, QUIZ_SET_STATUSES.INACTIVE));
};

interface updateQuizSetTitleProps {
  quizSetId?: string,
  title?: string
}

export const updateQuizSetTitle = (
  { quizSetId, title }: updateQuizSetTitleProps,
) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { quizSets } = getState().quizzes;
  const quizSetIndex = quizSets.findIndex(({ id }) => quizSetId === id);

  if (quizSetIndex < 0) {
    return;
  }

  const nextState = produce(quizSets, (draftQuizSets) => {
    draftQuizSets[quizSetIndex] = { ...draftQuizSets[quizSetIndex], title };
  });

  dispatch(setQuizSets(nextState));
};

export const createQuestion = (
  questionSetId?: string,
) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { quizSets } = getState().quizzes;
  const questionSetIndex = quizSets.findIndex(({ id }) => questionSetId === id);

  if (questionSetIndex < 0) {
    return;
  }

  const nextState = produce(quizSets, (draftQuizSets) => {
    const { questions: draftQuestions } = draftQuizSets[questionSetIndex];

    if (!draftQuestions) {
      return;
    }

    draftQuestions.push({
      ...defaultQuestion,
      id: `${draftQuestions.length + 1}`,
    });
  });

  dispatch(setQuizSets(nextState));
};

interface updateQuestionsProps {
  quizSetId?: string,
  questionId?: string
  questionText?: string,
  isRequired: boolean
}

export const updateQuestions = ({
  quizSetId, questionId, questionText, isRequired,
}: updateQuestionsProps) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { quizSets } = getState().quizzes;
  const quizSetIndex = quizSets.findIndex(({ id }) => quizSetId === id);

  if (quizSetIndex < 0) {
    return;
  }
  const { questions } = quizSets[quizSetIndex];

  const questionIndex = questions?.findIndex(({ id }) => questionId === id);

  if (!questionIndex && questionIndex !== 0) {
    return;
  }

  const nextState = produce(quizSets, (draftQuizSets) => {
    const { questions: draftQuestions } = draftQuizSets[quizSetIndex];

    if (!draftQuestions) {
      return;
    }

    draftQuestions[questionIndex] = {
      ...draftQuestions[questionIndex],
      text: questionText,
      isRequired,
    };
  });

  dispatch(setQuizSets(nextState));
};
