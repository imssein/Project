import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsThunk } from '../../../redux/modules/posts';
import Feed from "../Feed";

function FeedListContainer(props) {
    const posts = useSelector((state) => state.posts.data);
    const dispatch = useDispatch();

    const getPosts = useCallback(
        () => {
        dispatch(getPostsThunk());
      }, [dispatch]);
    
    
    return <Feed posts={posts} getPosts={getPosts} />
}

export default FeedListContainer;