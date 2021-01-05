import { createAction } from "redux-actions";
import get from "lodash/get";
import { cstbapi } from "../apis/cstbapi";
import { AUTH_TOKEN } from "../constants/common";

export const getCurrentUserSuccess = createAction("AUTH/GET_CURRENT_SUCCESS");
export const loginSuccess = createAction("AUTH/LOGIN_SUCCESS");
export const logoutSuccess = createAction("AUTH/LOGOUT_SUCCESS");

export const getCurrentUser = () => dispatch => {
  return cstbapi
    .get("/current")
    .then(response => dispatch(getCurrentUserSuccess(response.data)));
};

export const login = (username, password) => dispatch => {
  return cstbapi
    .post("/authenticate", { username, password })
    .then(response => {
      localStorage.setItem(AUTH_TOKEN, get(response, "data.token"));
    })
    .catch(error => {
      return error;
    });
};

export const logout = () => dispatch => {
  localStorage.removeItem(AUTH_TOKEN);
  dispatch(logoutSuccess());
};
