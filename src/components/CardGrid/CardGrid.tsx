import React, { useEffect } from "react";
import { MagnifyingGlass } from  'react-loader-spinner'

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
    <div>
      {isLoading ? (
        <MagnifyingGlass 
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor = '#c0efff'
          color = '#e15b64'
        />
      ) : (
        <div>not loading</div>
      )}
    </div>
  );
};

export default CardGrid;