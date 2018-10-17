import { createStore, applyMiddleware, compose } from "redux";
import { AsyncStorage as storage } from "react-native";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";
export const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { watcherSaga } from "./sagas";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

export const configureStore = () => {
  const reducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    reducer,
    composeEnhancer(compose(applyMiddleware(sagaMiddleware)))
  );
  return store;
};
