import * as constants from "../constants";


export function error(state =  null, action){
  switch (action.type) {
    case constants.API_CALL_REQUEST_MAIN:
      return null;
    case constants.API_CALL_SUCCESS_MAIN:
      return null;
    case constants.API_CALL_FAILURE_MAIN:
      return action.error;
    default:
      return state;
  }
}