import { createAction } from '@reduxjs/toolkit';
import { withPayloadType } from '../store';
import { quizSetType } from '../../types/quizSetTypes';

import { SET_QUIZ_SETS } from './types';

export const setQuizSets = createAction(
	SET_QUIZ_SETS,
	withPayloadType<quizSetType[]>(),
);
