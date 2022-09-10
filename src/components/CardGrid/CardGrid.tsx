import React, { useEffect } from "react";

// External components
import { MagnifyingGlass } from  'react-loader-spinner';
import Pagination from '@mui/material/Pagination';

// Api
import { fetchPosts } from "../../api/posts";

// Components
import Card from "../Card/Card";

// Utils
import { PAGE_SIZE } from "../../utils/constants";

// Store
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPosts, update } from "../../app/slices/postsSlice";
import { selectIsLoading, toggle } from "../../app/slices/contextSlice";
import { selectPagination, updatePagination } from "../../app/slices/paginationSlice";

import './cardGrid.styles.scss';

const CardGrid = () => {
  const dispatch = useAppDispatch();

  // Store data
  const posts = useAppSelector(selectPosts);
  const isLoading = useAppSelector(selectIsLoading);
  const { page, offset, pageCount, visiblePosts } = useAppSelector(selectPagination);
  
  useEffect(() => {
    dispatch(toggle(true))
    fetchPosts().then(res => {
      dispatch(update(res));
    }).finally(() => dispatch(toggle(false)));
  }, [dispatch]);

  useEffect(() => {
    const endOffset = offset + PAGE_SIZE;
    dispatch(updatePagination({
      page: 1,
      offset: 0,
      pageCount: Math.ceil(posts.length / PAGE_SIZE),
      visiblePosts: posts.slice(offset, endOffset),
    }));
  }, [posts, dispatch]);
  
  const onChangeHandler = (_ev: React.ChangeEvent<unknown>, newPage: number) => {
    const newOffset = (newPage - 1) * PAGE_SIZE
    const endOffset = newOffset + PAGE_SIZE;

    dispatch(updatePagination({
      page: newPage,
      offset: newOffset,
      visiblePosts: posts.slice(newOffset, endOffset),
      pageCount
    }));
  }

  return(
    <div className="container">
      {isLoading ? (
        <div className="loading">
          <MagnifyingGlass 
            visible={true}
            height="150"
            width="150"
            glassColor = '#c0efff'
            color = '#e15b64'
          />
        </div>
      ) : (
        <>
          <Pagination count={pageCount} onChange={onChangeHandler} page={page} />
          <div className="grid">
            {visiblePosts.map(post => <Card post={post} key={post.id} />)}
          </div>
        </>
      )}
    </div>
  );
};

export default CardGrid;