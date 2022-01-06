import { RootState } from 'store/store';

export type Selector<S> = (state: RootState) => S;
