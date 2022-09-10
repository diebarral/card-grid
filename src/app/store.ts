import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import contextReducer from './slices/contextSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    context: contextReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;