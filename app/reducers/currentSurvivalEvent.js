import * as constants from "../constants";
export const currentSurvivalEvent = function(state = {}, action){
  switch(action.type){
    case constants.CHANGE_AGE:
      return action.events[Math.floor(Math.random()*action.events.length)]
    default:
      return state;
  }
}