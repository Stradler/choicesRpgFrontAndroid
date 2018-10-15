import { takeEvery,  call, put, all } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield all([
    takeEvery("API_CALL_REQUEST_SURVIVAL", survivalSaga),
    takeEvery("API_CALL_REQUEST_MAIN", mainSaga)
  ]);
}

// function that makes the api request and returns a Promise for response
function fetchMainEvents() {
  return axios({
    method: "get",
    url: "https://heroku-choices-rpg.herokuapp.com/api/main"
  });
}

function fetchSurvivalEvents(age) {
  return axios({
    method: "get",
    url: "https://heroku-choices-rpg.herokuapp.com/api/survival",
    params: {
      age
    }
  });
}

function* survivalSaga(action) {
  try {
    console.log("wut");
    const response = yield call(fetchSurvivalEvents, action.payload.age);
    const events = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS_SURVIVAL", events });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE_SURVIVAL", error });
  }
}

function* mainSaga() {
  console.log("wut");
  try {
    const response = yield call(fetchMainEvents);
    const events = response.data;

    yield put({ type: "API_CALL_SUCCESS_MAIN", events });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE_MAIN", error });
  }
}
