import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9090/v1/api";

// 리뷰 작성
const createReview = async (params, content, starRating) => {
  const response = await axios.post(
    API_URL + `/reviews/${params}/review`,
    {
      content,
      starRating,
    },
    {
      headers: authHeader(),
    }
  );
  return response.data;
};

// 리뷰 삭제
const deleteReview = (storeId, id) => {
  return axios.delete(API_URL + `/reviews/${storeId}/${id}`, {
    headers: authHeader(),
  });
};

// 리뷰 수정 
const editReview = async (storeId, reviewId, content, starRating) => {
  const response = await axios.post(
    API_URL + `/reviews/${storeId}/${reviewId}`,
    {
      content, 
      starRating
    }, 
    {
      headers: authHeader(),
    }
  );
  return response.data;
}

const ReviewService = {
  createReview,
  deleteReview,
  editReview,
};

export default ReviewService;
