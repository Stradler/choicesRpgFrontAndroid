import * as constants from "../constants";

export const resetGame = (age) => {
  return{
    type: constants.RESET_GAME,
  }
}

export const changeAGE = (age) => {
  return{
    type: constants.CHANGE_AGE,
    payload: {
      age
    }
  }
}

export const changeMONEY = (money) => {
  return{
    type: constants.CHANGE_MONEY,
    payload: {
      money
    }
  }
}

export const changeHP = (hp) => {
  return{
    type: constants.CHANGE_HP,
    payload: {
      hp
    }
  }
}