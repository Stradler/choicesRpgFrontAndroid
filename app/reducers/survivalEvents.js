import * as constants from "../constants";

export function survivalEvents(state =  {events: [], currrentSurvivalEvent: 0}, action){
  switch (action.type) {
    case constants.API_CALL_REQUEST_SURVIVAL:
      return state;
    case constants.API_CALL_SUCCESS_SURVIVAL:
      return {events: action.events, currentSurvivalEvent: 0};
    case constants.API_CALL_FAILURE_SURVIVAL:
      return state;
    case constants.CHANGE_AGE:
      return {...state, currentSurvivalEvent: Math.floor(Math.random()*state.events.length)}
    default:
      return state;
  }
}