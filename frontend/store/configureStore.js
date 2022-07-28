import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore = () => {
  const middlewares = [];
  // 개발용 미들웨어와 배포용 미들웨어는 다르다.
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  // history가 쌓이면 메모리를 많이 잡아먹고,
  // 중앙데이터가 변화하는걸 볼 수 있기때문에 보안성으로 취약할 수 있기 때문에
  const store = createStore(reducer, enhancer);

  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
