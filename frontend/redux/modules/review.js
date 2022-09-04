import axios from "axios";

// 액션 타입 정의
export const GET_REVIEW_START = "GET_REVIEW_START";
export const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS";
export const GET_REVIEW_FAIL = "GET_REVIEW_FAIL";

// 액션 생성 함수
export function getReviewStart() {
    return {
      type: GET_REVIEW_START,
    };
  }
  
  export function getReviewSuccess(data) {
    return {
      type: GET_REVIEW_SUCCESS,
      data,
    };
  }
  
  export function getReviewFail(error) {
    return {
      type: GET_REVIEW_FAIL,
      error,
    };
  }

  const initialState = {
    loading: false,
    data: [],
    error: null,
  };

  export default function reducer(state = initialState, action) {
    if (action.type === GET_REVIEW_START) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    if (action.type === GET_REVIEW_SUCCESS) {
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    }
  
    if (action.type === GET_REVIEW_FAIL) {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  
    return state;
  }

  // 식당에 따른 리뷰 조회
  export function getReviewThunk({params}) {
    return async (dispatch, getState) => {
      try {
        dispatch(getReviewStart());
        // sleep
        //await sleep(2000);
        const res = await axios.get(`http://localhost:9090/v1/api/reviews/${params}`);
        dispatch(getReviewSuccess(res.data));
      } catch (error) {
        dispatch(getReviewFail(error));
      }
    };
  }
  