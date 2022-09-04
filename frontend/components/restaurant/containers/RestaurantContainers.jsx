import React, {useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailThunk } from "../../../redux/modules/districts";
import Restaurant from "../Restaurant";
import RestaurantMap from "../RestaurantMap";
import { getReviewThunk } from "../../../redux/modules/review";
import Review from "../../review/Review";
import Feed from "../../feed/Feed";
function RestaurantContainers({ params }) {
  const restaurant = useSelector((state) => state.districts.data);
  const posts = useSelector((state) => state.review.data);
  const dispatch = useDispatch();

  const getDetail = useCallback(() => {
    dispatch(getDetailThunk({ params }));
  }, [dispatch, params]);

  const getPosts = useCallback(() => {
    dispatch(getReviewThunk({ params }));
  }, [dispatch, params]);

  return (
    <div>
      <Restaurant restaurant={restaurant} getDetail={getDetail} />
      <RestaurantMap restaurant={restaurant} getDetail={getDetail} />
      <Review posts={posts} getPosts={getPosts} />
      {/* <Feed posts={posts} getPosts={getPosts} /> */}
    </div>
  );
}

export default RestaurantContainers;
