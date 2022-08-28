import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const configureStore = () => {
    const middlewares = [];
  // redux devtools에 action 기록을 남기기 위함
  const enhancer =
    process.env.NODE_ENV === "production"
      ? //devtool 연결 안함
        compose(applyMiddleware(...middlewares))
      : //devtool 연결 함

        composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  return store;
};

// 두번째 인자는 옵션 객체
// debug가 true일 때 redux에 대해서 조금 더 자세하게 나옴. \
// 개발할 때 더 좋음.
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
