import axios from "axios";

// 액션 타입 정의
export const GET_DISTRICTS_START = "GET_DISTRICTS_START";
export const GET_DISTRICTS_SUCCESS = "GET_DISTRICTS_SUCCESS";
export const GET_DISTRICTS_FAIL = "GET_DISTRICTS_FAIL";

export const GET_DETAIL_START = "GET_DETAIL_START";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAIL = "GET_DETAIL_FAIL";

// 액션 생성 함수
export function getDistrictsStart() {
  return {
    type: GET_DISTRICTS_START,
  };
}

export function getDistrictsSuccess(data) {
  return {
    type: GET_DISTRICTS_SUCCESS,
    data,
  };
}

export function getDistrictsFail(error) {
  return {
    type: GET_DISTRICTS_FAIL,
    error,
  };
}

export function getDetailStart() {
  return {
    type: GET_DETAIL_START,
  };
}

export function getDetailSuccess(data) {
  return {
    type: GET_DETAIL_SUCCESS,
    data,
  };
}

export function getDetailFail(error) {
  return {
    type: GET_DETAIL_FAIL,
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
  if (action.type === GET_DISTRICTS_START || action.type === GET_DETAIL_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_DISTRICTS_SUCCESS || action.type === GET_DETAIL_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === GET_DISTRICTS_FAIL || action.type === GET_DETAIL_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  return state;
}

// 지역구에 따른 식당 조회
export function getDistrictsThunk({params}) {
  return async (dispatch, getState) => {
    try {
      dispatch(getDistrictsStart());
      // sleep
      //await sleep(2000);
      const res = await axios.get(
        `http://localhost:9090/v1/api/stores/conditions?districts=${params}`
      );
      dispatch(getDistrictsSuccess(res.data));
    } catch (error) {
      dispatch(getDistrictsFail(error));
    }
  };
}

// 식당 상세보기
export function getDetailThunk({params}) {
  return async (dispatch, getState) => {
    try {
      dispatch(getDetailStart());
      // sleep
      //await sleep(2000);
      const res = await axios.get(
        `http://localhost:9090/v1/api/stores/${params}`
      );
      dispatch(getDetailSuccess(res.data));
    } catch (error) {
      dispatch(getDetailFail(error));
    }
  };
}

