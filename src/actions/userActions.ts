import { createAction } from "redux-actions";
import { cstbapi } from "../apis/cstbapi";

export const getUsersSuccess = createAction("USERS/GET_SUCCESS");

export const getUsers = () => dispatch => {
  return cstbapi
    .get("/user")
    .then(response => dispatch(getUsersSuccess(response.data)));
};
