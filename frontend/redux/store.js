import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    reducer,
    // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
    composeWithDevTools(applyMiddleware(ReduxThunk))
  ); // 여러개의 미들웨어를 적용 할 수 있습니다.

  
  export default store;
