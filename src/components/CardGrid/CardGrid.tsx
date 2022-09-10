import React, { useEffect } from "react";

// Api
import { fetchPosts } from "../../api/posts";

// Store
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPosts, update } from "../../app/slices/postsSlice";
import { selectIsLoading, toggle } from "../../app/slices/contextSlice";

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
    <div>{isLoading ? <span>is loading</span> : <div>not loading</div>}</div>
  );
};

export default CardGrid;