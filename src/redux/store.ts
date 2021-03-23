import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import authReducer from './auth/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const reducer = combineReducers({
  auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);