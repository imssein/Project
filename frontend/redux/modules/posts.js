import axios from "axios";

// 액션 타입 정의
export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const GET_POST_START = "GET_POST_START";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";

// 액션 생성 함수
export function getPostsStart() {
  return {
    type: GET_POSTS_START,
  };
}

export function getPostsSuccess(data) {
  return {
    type: GET_POSTS_SUCCESS,
    data,
  };
}

export function getPostsFail(error) {
  return {
    type: GET_POSTS_FAIL,
    error,
  };
}

export function getPostStart() {
  return {
    type: GET_POST_START,
  };
}

export function getPostSuccess(data) {
  return {
    type: GET_POST_SUCCESS,
    data,
  };
}

export function getPostFail(error) {
  return {
    type: GET_POST_FAIL,
    error,
  };
}

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_POSTS_START || action.type === GET_POST_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_POSTS_SUCCESS || action.type === GET_POST_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === GET_POSTS_FAIL || action.type === GET_POST_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  return state;
}

// 전체 게시글 목록 조회
export function getPostsThunk() {
  return async (dispatch, getState) => {
    try {
      dispatch(getPostsStart());
      // sleep
      //await sleep(2000);
      const res = await axios.get("http://localhost:9090/v1/api/posts");
      dispatch(getPostsSuccess(res.data));
    } catch (error) {
      dispatch(getPostsFail(error));
    }
  };
}

// 게시글 조회
export function getPostThunk(post_id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getPostStart());
      // sleep
      //await sleep(2000);
      const res = await axios.get(`http://localhost:9090/v1/api/posts/${post_id}`);
      dispatch(getPostSuccess(res.data));
    } catch (error) {
      dispatch(getPostFail(error));
    }
  };
}




