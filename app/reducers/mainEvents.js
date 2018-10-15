import * as constants from "../constants";


export function mainEvents(state =  [], action){
  switch (action.type) {
    case constants.API_CALL_REQUEST_MAIN:
      return state;
    case constants.API_CALL_SUCCESS_MAIN:
      return action.events;
    case constants.API_CALL_FAILURE_MAIN:
      return state;
    default:
      return state;
  }
}