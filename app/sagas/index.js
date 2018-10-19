import { takeEvery, call, put, all } from "redux-saga/effects";
import * as API from "../config/api";
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield all([
    takeEvery("API_CALL_REQUEST_SURVIVAL", survivalSaga),
    takeEvery("API_CALL_REQUEST_MAIN", mainSaga),
    takeEvery("API_CALL_LOGIN", loginSaga),
    takeEvery("API_CALL_SIGNUP", signupSaga),
    takeEvery("API_CALL_GET_USER_INFO", getUserInfoSaga),
    takeEvery("API_CALL_UPDATE_INFO", updateInfoSaga)
  ]);
}

function* updateInfoSaga(action) {
  const { hp, age, money, token, currentEvent } = action.payload;
  try {
    const response = yield call(
      API.updateInfo,
      hp,
      age,
      money,
      token,
      currentEvent
    );
    const user = response.data;
    if (user.status) {
      yield put({ type: "API_CALL_UPDATE_INFO_SUCCESS", user });
    } else {
      yield put({ type: "API_CALL_UPDATE_INFO_FAILURE", kek: "lel" });
    }

    // dispatch a success action to the store with the new dog
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_UPDATE_INFO_FAILURE", kek: "lel" });
  }
}

function* getUserInfoSaga(action) {
  try {
    const response = yield call(API.getInfo, action.payload.token);
    const user = response.data;
    if (user.status) {
      yield put({ type: "API_CALL_LOGIN_SUCCESS", ...user });
    } else {
      yield put({ type: "API_CALL_LOGIN_FAILURE", kek: "lel" });
    }

    // dispatch a success action to the store with the new dog
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_LOGIN_FAILURE", kek: "lel" });
  }
}

// function that makes the api request and returns a Promise for response
function* loginSaga(action) {
  try {
    const response = yield call(
      API.logIn,
      action.payload.login,
      action.payload.password
    );
    const user = response.data;
    if (user.status) {
      yield put({ type: "API_CALL_LOGIN_SUCCESS", ...user });
    } else {
      yield put({ type: "API_CALL_LOGIN_FAILURE", kek: "lel" });
    }

    // dispatch a success action to the store with the new dog
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_LOGIN_FAILURE", kek: "lel" });
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(
      API.signUp,
      action.payload.login,
      action.payload.password
    );
    const user = response.data;
    if (user.status) {
      console.log(user);
      yield put({ type: "API_CALL_SIGNUP_SUCCESS", ...user });
    } else {
      yield put({ type: "API_CALL_SIGNUP_FAILURE", kek: "lel" });
    }

    // dispatch a success action to the store with the new dog
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_SIGNUP_FAILURE", kek: "lel" });
  }
}

function* survivalSaga(action) {
  try {
    const response = yield call(API.fetchSurvivalEvents, action.payload.age);
    const events = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS_SURVIVAL", events });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE_SURVIVAL", error });
  }
}

function* mainSaga() {
  try {
    const response = yield call(API.fetchMainEvents);
    const events = response.data;

    yield put({ type: "API_CALL_SUCCESS_MAIN", events });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE_MAIN", error });
  }
}
