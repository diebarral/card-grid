import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Post } from '../../types/post'

interface PaginationState {
  page: number,
  offset: number,
  pageCount: number,
  visiblePosts: Post[],
};

const initialState: PaginationState = {
  page: 1,
  offset: 0,
  pageCount: 0,
  visiblePosts: []
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    updatePagination: (state, { 
      payload: { page, offset, pageCount, visiblePosts } 
    }: PayloadAction<PaginationState>) => {
      state.page = page;
      state.offset = offset;
      state.pageCount = pageCount;
      state.visiblePosts = visiblePosts;
    }
  }
});

export const { updatePagination } = paginationSlice.actions;

export const selectPagination = (state: RootState) => ({ ...state.pagination })

export default paginationSlice.reducer;