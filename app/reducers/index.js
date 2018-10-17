import { combineReducers } from "redux";
import { mainEvents } from "./mainEvents";
import { error } from "./error";
import { fetching } from "./fetching";
import { survivalEvents } from "./survivalEvents";
import { currentSurvivalEvent } from "./currentSurvivalEvent";
// import {navReducer} from "../App";
import * as constants from "../constants";

const ageReducer = function(state = 0.0, action) {
  switch (action.type) {
    case constants.CHANGE_AGE:
      return action.payload.age;
    case constants.RESET_GAME:
      return 0.0;
    default:
      return state;
  }
};

const hpReducer = function(state = 50, action) {
  switch (action.type) {
    case constants.CHANGE_HP:
      return action.payload.hp + state;
    case constants.RESET_GAME:
      return 50;
    default:
      return state;
  }
};

const moneyReducer = function(state = 0, action) {
  switch (action.type) {
    case constants.CHANGE_MONEY:
      return action.payload.money + state;
    case constants.RESET_GAME:
      return 0;
    default:
      return state;
  }
};
export default combineReducers({
  mainEvents,
  error,
  fetching,
  survivalEvents,
  AGE: ageReducer,
  HP: hpReducer,
  MONEY: moneyReducer
  // nav: navReducer
});
