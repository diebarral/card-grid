import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Post } from '../../types/post';

interface PostsState {
  posts: Post[];
};

const initialState: PostsState = {
  posts: []
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    update:  (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    }
  }
});

export const { update } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
