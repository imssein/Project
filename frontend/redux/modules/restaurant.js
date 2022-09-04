import axios from "axios";

// 액션 타입 정의
export const GET_RESTAURANTS_START = "GET_RESTAURANTS_START";
export const GET_RESTAURANTS_SUCCESS = "GET_RESTAURANTS_SUCCESS";
export const GET_RESTAURANTS_FAIL = "GET_RESTAURANTS_FAIL";

// 액션 생성 함수
// export function getRestaurantsStart() {
//   return {
//     type: GET_RESTAURANTS_START,
//   };
// }

// export function getRestaurantsSuccess(data) {
//   return {
//     type: GET_RESTAURANTS_SUCCESS,
//     data,
//   };
// }

// export function getRestaurantsFail(error) {
//   return {
//     type: GET_RESTAURANTS_FAIL,
//     error,
//   };
// }

// 초기값
const initialState = { 
    restaurants: {
  loading: false,
  data: null,
  error: null,
    }
};

// 리듀서
export default function reducer(state = initialState, action) {
  if (action.type === GET_RESTAURANTS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_RESTAURANTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.restaurants,
    };
  }

  if (action.type === GET_RESTAURANTS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  return state;
}

// redux-thunk
export const getRestaurants = () => async dispatch => {
    dispatch({ type: GET_RESTAURANTS_START });  //요청 시작 
    try { 
        const restaurants = await axios.get("http://localhost:9090/v1/api/stores"); //API 호출 
        dispatch({ type: GET_RESTAURANTS_SUCCESS, restaurants});    //성공 
    } catch(e) {
        dispatch({ type: GET_RESTAURANTS_FAIL, error: e});      //실패
    }
};

// export function getRestaurantsThunk() {
//   return async (dispatch) => {
//     try {
//       dispatch(getStoresStart());
//       const res = await axios.get("http://localhost:9090/v1/api/stores");
//       dispatch(getStoresSuccess(res.data));
//     } catch (error) {
//       dispatch(getStoresFail(error));
//     }
//   };
// }
