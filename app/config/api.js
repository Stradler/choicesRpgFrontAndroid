import axios from "axios";
const API_ENDPOINT = "http://localhost:8080/";

//TODO: refactor

export function getInfo(token) {
  return axios({
    method: "get",
    url: API_ENDPOINT + "api/users/current",
    headers: {
      Authorization: "Token " + token
    }
  });
}

export function updateInfo(
  hp = 50,
  age = 0,
  money = 0,
  currentEvent = "",
  token
) {
  return axios({
    method: "post",
    url: API_ENDPOINT + "api/users/update",
    headers: {
      Authorization: "Token " + token
    },
    data: {
      hp,
      age,
      money,
      currentEvent
    }
  });
}

export function logIn(login, password) {
  return axios({
    method: "post",
    url: API_ENDPOINT + "api/users/login",
    data: {
      login,
      password
    }
  });
}

export function signUp(login, password) {
  return axios({
    method: "post",
    url: API_ENDPOINT + "api/users/",
    data: {
      login,
      password,
      kek: "lel"
    }
  });
}

export function fetchMainEvents() {
  return axios({
    method: "get",
    url: API_ENDPOINT + "api/main"
  });
}

export function fetchSurvivalEvents(age) {
  return axios({
    method: "get",
    url: API_ENDPOINT + "api/survival",
    params: {
      age
    }
  });
}
