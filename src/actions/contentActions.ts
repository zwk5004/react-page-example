import { createAction } from "redux-actions";

import { cstbapi } from "../apis/cstbapi";

export const getAllContentSuccess = createAction("CONTENT/GET_ALL_SUCCESS");
export const saveContentSuccess = createAction("CONTENT/SAVE_SUCCESS");
export const getContentSuccess = createAction("CONTENT/GET_SUCCESS");
export const clearContentSuccess = createAction("CONTENT/CLEAR_SUCCESS");

export const clearContent = () => dispatch => {
  return dispatch(clearContentSuccess());
};

export const getAllContent = () => dispatch => {
  return cstbapi
    .get("/content")
    .then(response => dispatch(getAllContentSuccess(response.data)));
};

export const saveContent = content => dispatch => {
  const payload = Object.assign({}, content);
  payload.content = JSON.stringify(payload.content);
  return cstbapi
    .post("/content", payload)
    .then(response => dispatch(saveContentSuccess(response.data)));
};

export const getContent = id => dispatch => {
  return cstbapi
    .get(`/content/${id}`)
    .then(response => dispatch(getContentSuccess(response.data)));
};
