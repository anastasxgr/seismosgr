import { configureStore } from '@reduxjs/toolkit';
import quakesReducer from './slices/quakesSlice';

export const store = configureStore({
  reducer: {
    quakes: quakesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;