import React, {useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailThunk } from "../../../redux/modules/districts";
import Restaurant from "../Restaurant";
import RestaurantMap from "../RestaurantMap";
import { getReviewThunk } from "../../../redux/modules/review";
import Review from "../../reviewComponent/Feed";

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
    <div className="h-full bg-gray-4 px-9 py-4">
      <Restaurant restaurant={restaurant} getDetail={getDetail} />
      <RestaurantMap restaurant={restaurant} getDetail={getDetail} />
      <Review posts={posts} getPosts={getPosts} />
      {/* <Feed posts={posts} getPosts={getPosts} /> */}
    </div>
  );
}

export default RestaurantContainers;
