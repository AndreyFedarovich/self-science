import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import quizzesReducer from './quizzes';

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const withPayloadType = <T>() => (t: T) => ({ payload: t });
