import { createReducer, AnyAction } from '@reduxjs/toolkit';
import { quizSetType } from '../../types/quizSetTypes';
import { SET_QUIZ_SETS } from './types';

interface QuizzesState {
	quizSets: quizSetType[];
}

const initialState: QuizzesState = {
	quizSets: [],
};

const quizzesReducer = createReducer(initialState, builder => {
	builder.addCase(SET_QUIZ_SETS, (state: QuizzesState, action: AnyAction) => {
		state.quizSets = action.payload;
	});
});

export default quizzesReducer;
