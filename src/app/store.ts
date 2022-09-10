import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import contextReducer from './slices/contextSlice';
import paginationReducer from './slices/paginationSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    context: contextReducer,
    pagination: paginationReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;