import React, { useEffect } from "react";
import { MagnifyingGlass } from  'react-loader-spinner'

// Api
import { fetchPosts } from "../../api/posts";

// Components
import Card from "../Card/Card";

// Store
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPosts, update } from "../../app/slices/postsSlice";
import { selectIsLoading, toggle } from "../../app/slices/contextSlice";

import './cardGrid.styles.scss';

const CardGrid = () => {
  const posts = useAppSelector(selectPosts);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggle(true))
    fetchPosts().then(res => {
      dispatch(update(res));
    }).finally(() => dispatch(toggle(false)));
  }, [dispatch]);

  return(
    <div className="container">
      {isLoading ? (
        <div className="loading">
          <MagnifyingGlass 
            visible={true}
            height="150"
            width="150"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
            color = '#e15b64'
          />
        </div>
      ) : (
        <div className="grid">
          {posts.map(post => <Card post={post} key={post.id} />)}
        </div>
      )}
    </div>
  );
};

export default CardGrid;