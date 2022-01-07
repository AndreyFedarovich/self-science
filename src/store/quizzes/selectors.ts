import { createSelector } from 'reselect';
import { Selector } from 'src/types/store.types';
import { quizSetType } from 'src/types/quizSetTypes';
import { RootState } from '../store';

export const selectQuizSets = (state: RootState) => state.quizzes.quizSets;

export const selectQuizSetById = (
	id: string,
): Selector<quizSetType | undefined> =>
	createSelector(
		(state: RootState) =>
			state.quizzes.quizSets.find(quizSets => quizSets.id === id),
		questionSet => questionSet,
	);
