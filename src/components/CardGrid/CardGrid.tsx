import React, { useEffect } from "react";

// Api
import { fetchPosts } from "../../api/posts";

// Store
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPosts } from "../../app/slices/postsSlice";
import { update } from "../../app/slices/postsSlice";

const CardGrid = () => {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchPosts().then(res => {
      dispatch(update(res));
    });
  }, [dispatch]);

  useEffect(() => {
    console.log('Use Effect', posts);
  }, [posts])

  return(
    <div>hey</div>
  );
};

export default CardGrid;